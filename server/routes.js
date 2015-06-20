'use strict';

var errors = require('./componenets/errors');

module.exports = function(app) {
	
	app.use('/api/users', require('./api/user'));
	
	app.use('/auth', require('./auth'));
	
	app.route('/:url(api|auth|components|app|bower_components|assets)/*')
		.get(erros[404]);
		
	app.route('/*')
		.get(function(req, res) {
			res.sendfile(app.get('appPath') + '/index.html');
		});
	
};