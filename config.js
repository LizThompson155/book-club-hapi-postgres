"use strict";

const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
    PORT,
    HOST,
    DATABASE_URL
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");
assert(DATABASE_URL, "DATABASE_URL is required");

module.exports = {
    port: PORT,
    host: HOST,
    database_url: DATABASE_URL
}