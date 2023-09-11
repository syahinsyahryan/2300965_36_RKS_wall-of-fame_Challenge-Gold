/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("feeds").del();
  await knex("feeds").insert([
    { username: "andre", scribe: "saya akan room tour" },
    { username: "komeng", scribe: "spontan uhuy" },
    { username: "sule", scribe: "disini ada sule" },
    { username: "abdel", scribe: "kembali lagi di mamah dan aa" },
  ]);
};
