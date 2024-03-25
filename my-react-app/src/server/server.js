import express from "express";

import apiRouter from "./api-router";

const server = express();

server.use("/api", apiRouter);

server.get("/", async (req, res) => {
  res.render("index");
});
