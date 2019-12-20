const db = require("../database/dbConfig");

const add = user => {
  return db("users").insert(user);
};

const find = () => {
  return db("users");
};

const findBy = filter => {
  return db("users").where(filter);
};

const findById = id => {
  return db("users").where({ id });
};

const remove = id => {
  return db("users")
    .where({ id })
    .del();
};

module.exports = { add, find, findBy, findById, remove };
