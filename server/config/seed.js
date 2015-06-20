/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');

User.find({}).remove(function() {
	User.create({
		provider: 'local',
		name: 'Butts Carlton',
		email: 'test@test.com',
		password: 'test'
	});
});