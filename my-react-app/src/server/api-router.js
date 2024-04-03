import express from "express";
import cors from "cors";
import OpenAI from "openai";
import fs from "fs";
import csvParser from "csv-parser";
import 'dotenv/config'
import path from 'path';
import { fileURLToPath } from 'url';


const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;
const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });

const router = express.Router();
router.use(cors());
router.use(express.json());

const readCSV = async (filePath) => {
    return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (data) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};

let csvData = [];

const preprocessCSVData = (rawData) => {
    return rawData.map(row => {
        let processedRow = {};

        if (row.neighbourhood_link) {
            processedRow.neighbourhood = row.neighbourhood_link.replace(/[\d\s()]/g, '');
        } else {
            processedRow.neighbourhood = '';
        }

        if (row.Address) {
            processedRow.location = row.Address
        } else {
            processedRow.location = '';
        }

        const bedroomMatch = row.Bedroom ? row.Bedroom.match(/\d+/) : null;
        processedRow.bedrooms = bedroomMatch ? parseInt(bedroomMatch[0], 10) : 0;

        const bathroomMatch = row.Bathroom ? row.Bathroom.match(/\d+/) : null;
        processedRow.bathrooms = bathroomMatch ? parseInt(bathroomMatch[0], 10) : 0;

        if (row.Rental_Type) {
            processedRow.type = row.Rental_Type
        } else {
            processedRow.type = '';
        }

        const sqftMatch = row.Sqft ? row.Sqft.match(/\d+/) : null;
        processedRow.sqft = sqftMatch ? parseInt(sqftMatch[0], 10) : 0;

        if (row.Rental_Price) {
            processedRow.price = parseInt(row.Rental_Price.replace(/[^\d]/g, ''), 10);
        } else {
            processedRow.price = 0;
        }

        return processedRow;
    });
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const csvFilePath = path.join(__dirname, 'rental_homes.csv');


readCSV(csvFilePath).then(data => {
    csvData = preprocessCSVData(data);
    console.log(csvData.length)
    console.log('CSV data preprocessed:', csvData);
}).catch(error => {
    console.error('Error reading CSV:', error);
});

const buildExamplesString = (examplesData) => {
    const MAX_EXAMPLES = 278;
    const examples = examplesData.slice(0, MAX_EXAMPLES);

    return examples.map(example => {
        return `A ${example.type} in ${example.neighbourhood}, ${example.location} with ${example.bedrooms} bedrooms, ${example.bathrooms} bathrooms, and an area of ${example.sqft} square feet is priced at $${example.price} per month.`;
    }).join(' ');
};


router.get("/price", async (req, res) => {
    const {
        neighbourhood,
        location,
        bedrooms,
        bathrooms,
        type,
        sqft
    } = req.body;

    const examplesString = buildExamplesString(csvData);

    console.log(examplesString);
    console.log(csvData.length)

    const prompt = `The following are rental prices for various properties:\n${examplesString}\nGiven a ${type} for rent in ${neighbourhood}, ${location} with ${bedrooms} bedrooms, ${bathrooms} bathrooms, and an area of ${sqft} square feet, how much should it be priced per month?`;

    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are an assistant helping a landlord price their rental units in Canada. Simply give the estimated price in one sentence, starting with \"The estimated price for this rental unit \". Give a single point estimate. Only include the price." },
            {
                role: "user", content: prompt
            }
        ],
        model: "gpt-3.5-turbo",
    });

    const price = completion.choices[0].message.content;

    res.send({ price });
})

export default router;
