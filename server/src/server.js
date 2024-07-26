import express from "express";

import apiRouter from "./api-router.js";

import { HOST, PORT } from "../../frontend/src/config.js";

const server = express();

server.use("/api", apiRouter);

server.listen(PORT, HOST);

export default server;