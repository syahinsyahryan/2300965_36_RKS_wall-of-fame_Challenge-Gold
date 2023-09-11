const knex = require("knex");
const knexfile = require("/home/ryanks/binar/project-website/wall-of-fame/knexfile");
const config = require("/home/ryanks/binar/project-website/wall-of-fame/knexfile");
const NODE_ENV = process.env.NODE_ENV || "development";
const db = knex(knexfile[NODE_ENV]);

module.exports = knex(config.development);
module.exports = db;
