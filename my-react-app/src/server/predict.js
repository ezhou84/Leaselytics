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

// Test values
const bed = 1;
const bath = 1;
const type = "Apt/Condo";
const neighbourhood = "Mount Pleasant East";
const sqft = 650;

// Should be $2290/month
const sentence = `A ${type} in ${neighbourhood}, Vancouver with ${bed} Bed, ${bath} Bath, and an area of ${sqft} Sqft.`;     
const embedding = await openai.embeddings.create({
    model: "text-embedding-3-large",
    input: sentence,
    encoding_format: "float",
    dimensions: 2100,
});
const testVector = embedding.data[0].embedding;

const index = pc.Index("leaselytics");

const queryResults = await index.namespace("ns1").query({
    topK: 5,
    vector: testVector,
    filter: {
        bed: {
            $eq: `${bed} Bed`
        },
        bath: {
            $eq: `${bath} Bath`
        }
    },
    includeValues: true,
    includeMetadata: true,
});

const neighbours = queryResults["matches"].map((match) => {
    const address = match["metadata"]["address"];
    const price = match["metadata"]["price"];
    const sqft = match["metadata"]["sqft"];
    const bed = match["metadata"]["bed"];
    const bath = match["metadata"]["bath"];
    const type = match["metadata"]["type"];
    const neighbourhood = match["metadata"]["neighbourhood"];
    const link = match["metadata"]["link"];
    
    return {
        address: address,
        price: price,
        sqft: sqft,
        bed: bed,
        bath: bath,
        type: type,
        neighbourhood: neighbourhood,
        link: link
    };
});
console.log(neighbours);

const matchingPrices = queryResults["matches"].map((match) => {
    const matchingPrice = match["metadata"]["price"];
    return matchingPrice;
});
console.log(matchingPrices);

const averagePrice = Math.round(matchingPrices.reduce((sum, price) => {
    const numericPrice = parseInt(price.replace(/[$,/]/g, '').replace('/month', ''));
    return sum + numericPrice;
}, 0) / matchingPrices.length);
console.log(`Average price: $${averagePrice}`);
