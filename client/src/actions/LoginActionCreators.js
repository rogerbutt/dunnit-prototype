'use strict';

var Cookies = require('cookies-js');
var RouterContainer = require('../utils/RouterContainer');
var DunnitAppDispatcher = require('../dispatcher/DunnitPrototypeAppDispatcher');
var Auth = require('../utils/AuthService');
var UserService = require('../utils/UserService');
var UserConstants = require('../constants/UserConstants');


var ActionTypes = UserConstants.ActionTypes;

var LoginActionCreators = {
	loginUser: function (username, password) {
		Auth.login(username, password).then(function(token) {
			Cookies.set('token', token);
		
			return UserService.getUser();
		}).then(function (user) {
			DunnitAppDispatcher.dispatch({
				actionType: ActionTypes.LOAD_USER,
				user: user
			});
		});
	}
};

module.exports = LoginActionCreators; 
