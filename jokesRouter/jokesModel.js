const db = require("../database/dbConfig");

const add = joke => {
  return db("jokes").insert(joke);
};

const find = () => {
  return db("jokes");
};

const findById = id => {
  return db("jokes as j").where({ id });
};

const remove = id => {
  return db("jokes")
    .where({ id })
    .del();
};

const updateJoke = (id, changes) => {
  return db("jokes")
    .where({ id })
    .update(changes);
};

module.exports = { add, find, findById, remove, updateJoke };
