const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const server = express();

server.use(morgan("dev"));
server.use(helmet());
server.use(express.json());

server.use("/api/jokes");

module.exports = server;
