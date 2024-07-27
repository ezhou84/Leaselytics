import express from "express";

import apiRouter from "../api-router.js";

import { PORT } from "../../frontend/src/config.js";

import cors from "cors";

const server = express();

server.use(cors());

server.use(cors({
  origin: 'https://leaselytics.vercel.app/home',
  methods: ["POST", "GET"],
  credentials: true
}));

server.use("/api", apiRouter);

server.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));

export default server;