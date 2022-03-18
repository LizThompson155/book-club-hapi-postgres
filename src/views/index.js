'use strict';

const hbs = require('hbs');
const path = require('path');


module.exports.register = async server => {
	server.views({
		engines: {
			html: hbs
		},
		relativeTo: path.join(__dirname, '../'),
        path: 'templates'
    });	
};

