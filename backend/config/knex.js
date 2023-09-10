const knex = require("knex");
const knexfile = require("../knexfile");
const config = require("../knexfile");
const NODE_ENV = process.env.NODE_ENV || "development";
const db = knex(knexfile[NODE_ENV]);

module.exports = knex(config.development);
module.exports = db;
