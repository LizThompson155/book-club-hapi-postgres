'use strict';

const Hapi = require('hapi');
const server = require("./server");
const config = require("./config");

const init = async () => {
  try {
    const app = await server(config);
    await app.start();

    console.log(`Server running at http://${config.host}:${config.port}`);
  }
  catch (err) {
    console.log("startup error", err);
  }
};


init();