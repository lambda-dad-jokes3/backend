const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const authorization = require("./auth/auth-middleware");

const authRouter = require("./auth/authRoute");
const jokesRouter = require("./jokesRouter/jokesRouter");

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/user", authRouter);
server.use("/jokes", authorization, jokesRouter);

server.get("/", (req, res) => {
  res.send("Welcome to dad jokes");
  // res.status(200).json({ hello: "World!" });
});

module.exports = server;
