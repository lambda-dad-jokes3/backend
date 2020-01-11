exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl
        .string("username", 128)
        .unique()
        .notNullable();
      tbl.string("password", 128).notNullable();
    })
    .createTable("jokes", tbl => {
      tbl.increments();
      tbl
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl.string("question", 1000).notNullable();
      tbl.string("punchline", 1000).notNullable();
      tbl
        .boolean("public")
        .notNullable()
        .defaultTo(true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("jokes").dropTableIfExists("users");
};
