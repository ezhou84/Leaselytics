import csv from 'csv-parser';
import fs from 'fs';
import 'dotenv/config'
import path from 'path';
import OpenAI from 'openai';
import { fileURLToPath } from 'url';
import { Pinecone } from '@pinecone-database/pinecone';
import { Transform } from 'stream';

const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const pc = new Pinecone({
    apiKey: PINECONE_API_KEY
});

const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;
const openai = new OpenAI({ 
    apiKey: OPEN_AI_API_KEY 
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputFilePath = path.join(__dirname, 'paginated_rew.csv');
const outputFilePath = path.join(__dirname, 'paginated_rew_transformed.csv');

const outputStream = fs.createWriteStream(outputFilePath);

// Create index only if it hasn't been created yet
let indexNames = [];
await pc.listIndexes()
    .then((res) => {
        indexNames = res["indexes"].map(index => index.name);
    });

if (!indexNames.includes('leaselytics')) {
    await pc.createIndex({
        name: 'leaselytics',
        dimension: 2100,
        metric: 'cosine',
        spec: { 
        serverless: { 
            cloud: 'aws', 
            region: 'us-east-1' 
        }
        } 
    });
}

const index = pc.Index("leaselytics");

const metadata = [];

fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on('headers', (headers) => {
        headers.push('Sentence');
        outputStream.write(`${headers.join(',')}\n`);
    })
    .on('data', (row) => {
        const { Address, Rental_Price, Sqft, Bedroom, Bathroom, Rental_type, Neighbourhood, 'image-src': imageSrc } = row;
        const sentence = `"A ${Rental_type} in ${Neighbourhood}, Vancouver with ${Bedroom}, ${Bathroom}, and an area of ${Sqft}."`.replace(/\r?\n|\r/g, '');        
        row.Sentence = sentence;
        metadata.push({
            address: Address,
            price: Rental_Price,
            sqft: Sqft,
            bed: Bedroom,
            bath: Bathroom,
            type: Rental_type,
            neighbourhood: Neighbourhood,
            link: imageSrc
        })
        outputStream.write(`${Object.values(row).map(value => `"${value}"`).join(',')}\n`);
    })
    .on('end', async () => {
        outputStream.end();
        console.log('New CSV file created successfully!'); 
        
        const embeddings = [];
        
        class EmbeddingTransform extends Transform {
            constructor(options) {
                super({ ...options, objectMode: true });
                this.promises = [];
            }
        
            _transform(chunk, encoding, callback) {
                const sentence = chunk.Sentence;
                const promise = openai.embeddings.create({
                    model: "text-embedding-3-large",
                    input: sentence,
                    encoding_format: "float",
                    dimensions: 2100,
                }).then((embedding) => {
                    embeddings.push(embedding.data[0].embedding);
                }).catch((error) => {
                    console.error(`Failed to generate embedding: ${error}`);
                });
                this.promises.push(promise);
                callback();
            }
            
            _flush(callback) {
                Promise.all(this.promises).then(() => callback()).catch(error => {
                    console.error(`An error occurred in _flush: ${error}`);
                });
            }
        }

        async function batchUpsert(embeddings, batchSize = 100) {
            for (let i = 0; i < embeddings.length; i += batchSize) {
                const batch = embeddings.slice(i, i + batchSize);
                const items = batch.map((item) => ({
                    id: item.id,
                    values: item.values,
                    metadata: item.metadata
                }));
                await index.namespace("ns1").upsert(items)
                    .catch((error) => {
                        console.error('An error occurred during upsert:', error);
                    });
            }
        }

        const embeddingTransform = new EmbeddingTransform();

        fs.createReadStream(outputFilePath)
        .pipe(csv())
        .pipe(embeddingTransform)
        .on('data', () => {
            console.log('Processing sentences');
        })
        .on('end', async () => {
            console.log('Processing of sentences completed!');
            await batchUpsert(
                embeddings.map((embedding, index) => ({
                    id: `vec${index + 1}`,
                    values: embedding,
                    metadata: metadata[index],
                }))
            );
            console.log('Upsert completed');
        })
        .on('error', (error) => {
            console.error('An error occurred:', error);
        });
    });
