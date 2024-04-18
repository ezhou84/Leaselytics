import express from "express";
import cors from "cors";
import OpenAI from "openai";
import 'dotenv/config';
import { Pinecone } from '@pinecone-database/pinecone';

const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const pc = new Pinecone({
    apiKey: PINECONE_API_KEY
});

const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;
const openai = new OpenAI({ 
    apiKey: OPEN_AI_API_KEY 
});

const router = express.Router();
router.use(cors());
router.use(express.json());

router.post("/price", async (req, res) => {
    const {
        neighbourhood,
        bed,
        bath,
        type,
        sqft
    } = req.body;

    const sentence = `A ${type} in ${neighbourhood}, Vancouver with ${bed} Bed, ${bath} Bath, and an area of ${sqft} Sqft.`;
    console.log(sentence);  
    const embedding = await openai.embeddings.create({
        model: "text-embedding-3-large",
        input: sentence,
        encoding_format: "float",
        dimensions: 2100,
    });
    const testVector = embedding.data[0].embedding;
    console.log(testVector)

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

    console.log("Query done");
    console.log(queryResults);
    const matchingAddresses = queryResults["matches"].map((match) => {
        const matchingAddress = match["metadata"]["address"];
        return matchingAddress;
    });
    console.log(matchingAddresses);
    const matchingPrices = queryResults["matches"].map((match) => {
        const matchingPrice = match["metadata"]["price"];
        return matchingPrice;
    });
    console.log(matchingPrices);
    const matchingSqfts = queryResults["matches"].map((match) => {
        const matchingSqft = match["metadata"]["sqft"];
        return matchingSqft;
    });
    console.log(matchingSqfts);
    const matchingBeds = queryResults["matches"].map((match) => {
        const matchingBed = match["metadata"]["bed"];
        return matchingBed;
    });
    console.log(matchingBeds);
    const matchingBaths = queryResults["matches"].map((match) => {
        const matchingBath = match["metadata"]["bath"];
        return matchingBath;
    });
    console.log(matchingBaths);
    const matchingTypes = queryResults["matches"].map((match) => {
        const matchingType = match["metadata"]["type"];
        return matchingType;
    });
    console.log(matchingTypes);
    const matchingNeighbourhoods = queryResults["matches"].map((match) => {
        const matchingNeighbourhood = match["metadata"]["neighbourhood"];
        return matchingNeighbourhood;
    });
    console.log(matchingNeighbourhoods);
    const averagePrice = Math.round(matchingPrices.reduce((sum, price) => {
        const numericPrice = parseInt(price.replace(/[$,/]/g, '').replace('/month', ''));
        return sum + numericPrice;
    }, 0) / matchingPrices.length);
    console.log(`Average price: $${averagePrice}`);

    res.send({ 
        price: averagePrice,
        neighbors: {
            addresses: matchingAddresses,
            prices: matchingPrices,
            sqfts: matchingSqfts,
            beds: matchingBeds,
            baths: matchingBaths,
            types: matchingTypes,
            neighbourhoods: matchingNeighbourhoods 
        }
    });
});

export default router;
