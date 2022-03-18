'use strict';

const config = require('dotenv').config();
const postgres = require('hapi-postgres-connection');
const Vision = require('vision');
const inert = require('inert');

module.exports.register = async server => {
	await server.register([ postgres, Vision, inert ]);
};

