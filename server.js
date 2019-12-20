const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

const authRouter = require("./auth/authRoute");

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/user", authRouter);

module.exports = server;
