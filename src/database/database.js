const pgp = require("pg-promise")();
require("dotenv").config();
const db = pgp(process.env.DBSTRING);

module.exports = db;
