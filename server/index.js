import express from "express";

import apiRouter from "./src/api-router.js";

import { HOST, PORT } from "../frontend/src/config.js";

import cors from "cors";

const server = express();

server.use(cors());

server.use(cors({
  origin: 'https://leaselytics.vercel.app/',
  methods: ["POST", "GET"],
  credentials: true
}));

server.get("/", (req, res) => {
  res.json("Hello");
})

server.use("/api", apiRouter);

server.listen(PORT, HOST);

export default server;