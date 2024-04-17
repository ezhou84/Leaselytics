import 'dotenv/config'
import OpenAI from 'openai';
import { Pinecone } from '@pinecone-database/pinecone';

const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const pc = new Pinecone({
    apiKey: PINECONE_API_KEY
});

const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;
const openai = new OpenAI({ 
    apiKey: OPEN_AI_API_KEY 
});

// Sentence to be predicted goes here
const beds = 1;
const baths = 1;
// Should be $2290/month
const sentence = `A Apt/Condo in Mount Pleasant East, Vancouver with ${beds} Bed, ${baths} Bath, and an area of 650 Sqft.`;     
const embedding = await openai.embeddings.create({
    model: "text-embedding-3-large",
    input: sentence,
    encoding_format: "float",
    dimensions: 2100,
});
const testVector = embedding.data[0].embedding;

const index = pc.Index("leaselytics");

await index.namespace("ns1").query({
    topK: 5,
    vector: testVector,
    filter: {
        text: {
            $exists: true
        },
        beds: {
            $eq: `${beds} Bed`
        },
        baths: {
            $eq: `${baths} Bath`
        }
    },
    includeValues: true,
    includeMetadata: true,
})
.then(async (res) => {
    console.log("Query done");
    const matchingSentences = res["matches"].map((match) => {
        const matchingSentence = match["metadata"]["text"];
        return matchingSentence;
    });
    console.log(matchingSentences);
    const matchingPrices = res["matches"].map((match) => {
        const matchingPrice = match["metadata"]["price"];
        return matchingPrice;
    });
    console.log(matchingPrices);
    const averagePrice = Math.round(matchingPrices.reduce((sum, price) => {
        const numericPrice = parseInt(price.replace(/[$,/]/g, '').replace('/month', ''));
        return sum + numericPrice;
    }, 0) / matchingPrices.length);
    console.log(`Average price: $${averagePrice}`);
});