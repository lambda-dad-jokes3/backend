const knex = require("knex");

const knexConfig = require("../knexfile");

const enviornment = process.env.ENVIORNMENT;

module.exports = knex(knexConfig[enviornment]);
