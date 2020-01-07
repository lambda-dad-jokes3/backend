const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

const authRouter = require("./auth/authRoute");
const jokesRouter = require("./jokesRouter/jokesRouter");

server.use(morgan("dev"));
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/user", authRouter);
server.use("/api/jokes", jokesRouter);

server.get("/", (req, res) => {
  res.send("Welcome to dad jokes");
  // res.status(200).json({ hello: "World!" });
});

module.exports = server;
