// knexfile.js
module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "localhost",
      user: "ryannks",
      password: "456123789",
      database: "thewall_db",
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  },
};
