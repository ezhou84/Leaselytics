import express from "express";

import apiRouter from "./api-router.js";

import { HOST, PORT } from "../../frontend/src/config.js";

import cors from "cors";

const server = express();

server.use(cors());

server.use(cors({
  origin: 'https://leaselytics.vercel.app/'
}));

server.use("/api", apiRouter);

server.listen(PORT, HOST);

export default server;