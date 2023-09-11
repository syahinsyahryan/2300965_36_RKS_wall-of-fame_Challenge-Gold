/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) => {
  return;
  knex.schema.createTable("feeds", (table) => {
    table.increments("username").primary();
    table.string("scribe").notNullable();
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
  return;
  knex.schema.dropTable("feeds");
};
