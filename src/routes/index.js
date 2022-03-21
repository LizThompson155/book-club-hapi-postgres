'use strict';
const path = require('path');

const route = {
    method: 'GET',
    path: '/',
    handler: async function (request, h) {
      try {
         const result = await request.pg.client.query("select * from users");
         return h.response(result.rows[0]);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const viewRoute = {
    method: 'GET',
    path: '/index',
    handler: (req, h) => {
      return h.view('index', {
          title: 'The paiges of pages',
          message: 'A new app developed with hapi'
      });
  }
};

const styles = {
  method: 'GET',
  path: '/public/{param*}',
  handler: {
    directory: {
        path: path.join(__dirname, '../../public')
    }
}
};

module.exports.register = async server => {
	await server.route([ route, viewRoute, styles ]);
};