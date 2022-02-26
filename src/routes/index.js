'use strict';

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

module.exports.register = async server => {
	await server.route(route);
};