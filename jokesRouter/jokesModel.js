const db = require("../database/dbConfig");

const add = (joke, id) => {
  return db("jokes")
    .insert(joke)
    .where({ userId: id });
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
