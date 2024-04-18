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
const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputFilePath = path.join(__dirname, 'rental_homes.csv');
const outputFilePath = path.join(__dirname, 'rental_homes_transformed.csv');

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
        const { Rental_Price, Sqft, Bedroom, Bathroom, Rental_Type, Neighbourhood } = row;
        const sentence = `"A ${Rental_Type} in ${Neighbourhood}, Vancouver with ${Bedroom}, ${Bathroom}, and an area of ${Sqft} costs ${Rental_Price} to rent."`.replace(/\r?\n|\r/g, '');        
        row.Sentence = sentence;
        metadata.push({
            text: sentence,
            price: Rental_Price,
            beds: Bedroom,
            baths: Bathroom
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

        const embeddingTransform = new EmbeddingTransform();

        fs.createReadStream(outputFilePath)
        .pipe(csv())
        .pipe(embeddingTransform)
        .on('data', () => {
            console.log('Processing sentences');
        })
        .on('end', async () => {
            console.log('Processing of sentences completed!');
            await index.namespace("ns1").upsert(
                embeddings.map((embedding, index) => ({
                    id: `vec${index + 1}`,
                    values: embedding,
                    metadata: metadata[index],
                }))).then(() => {
                    console.log('Upsert completed');
                }).catch((error) => {
                    console.error('An error occurred during upsert:', error);
                });
        })
        .on('error', (error) => {
            console.error('An error occurred:', error);
        });
    })
