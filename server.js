'use strict';

const Hapi = require('hapi');
const plugins = require('./src/plugins');
const routes = require('./src/routes');

const app = async config => {
    const { host, port } = config;
    const server = Hapi.server({ host, port });

    server.app.config = config;

    console.log(process.env);
	await plugins.register( server );
	await routes.register( server );
	return server;
};

module.exports = app;