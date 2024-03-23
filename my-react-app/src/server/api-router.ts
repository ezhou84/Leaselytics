import express from "express";
import OpenAI from "openai";

require('dotenv').config();

const OPEN_AI_API_KEY = process.env.OPEN_AI_API_KEY;
const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });

const router = express.Router();
router.use(express.json());

router.get("/price", async (req, res) => {  
    const { 
        neighbourhood,
        city,
        bedrooms,
        bathrooms,
        area
     } = req.body;

    const completion = await openai.chat.completions.create({
        messages: [
            { role: "system", content: "You are an assistant helping a landlord price their rental units in Canada. Simply give the estimated price in one sentence, starting with \"The estimated price for this rental unit \". Give a single point estimate." },
            { role: "user", content: `Given a rental unit in ${neighbourhood}, ${city} with ${bedrooms} bedrooms, ${bathrooms} bathrooms, and an area of ${area} square feet, 
                                    how much should it be priced per month?` }
        ],
        model: "gpt-3.5-turbo",
    });

    const price = completion.choices[0].message.content;

    res.send({ price });
})

export default router;
