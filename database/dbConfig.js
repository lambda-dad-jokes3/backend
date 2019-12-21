const knex = require("knex");

const knexConfig = require("../knexfile");

const environment = process.env.DB || "development";

module.exports = knex(knexConfig[environment]);
