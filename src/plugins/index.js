'use strict';

const config = require('dotenv').config();
const postgres = require('hapi-postgres-connection');

module.exports.register = async server => {
	await server.register(postgres);
};

