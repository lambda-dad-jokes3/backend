const knex = require("knex");

const knexConfig = require("../knexfile");

const environment = process.env.DB || "production";

module.exports = knex(knexConfig["development"]);
