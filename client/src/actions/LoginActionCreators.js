'use strict';

var Cookies = require('cookies-js');
var DunnitAppDispatcher = require('../dispatcher/DunnitPrototypeAppDispatcher');
var Auth = require('../utils/AuthService');
var UserService = require('../utils/UserService');
var UserConstants = require('../constants/UserConstants');
var RouterContainer = require('../utils/RouterContainer');

var ActionTypes = UserConstants.ActionTypes;

var LoginActionCreators = {
	
	loginUser: function (username, password) {
		return Auth.login(username, password).then(function(token) {
			Cookies.set('token', token);
			return UserService.getUser();
		}).then(function (user) {
			DunnitAppDispatcher.handleServerAction({
				type: ActionTypes.LOAD_USER,
				user: user
			});
		}).catch(function (err) {
			throw(err);
		});
	},
	
	loadUser: function(token) {
		UserService.getUser().then(function (user) {
			DunnitAppDispatcher.handleServerAction({
				type: ActionTypes.LOAD_USER,
				user: user
			});
		}).catch(function (err) {
			throw(err);
		});
	},
	
	logoutUser: function () {
		if (Cookies.get('token')) {
			Cookies.expire('token');
			DunnitAppDispatcher.handleViewAction({
				type: ActionTypes.LOGOUT_USER,
				payload: null
			});
		}
	}
};

module.exports = LoginActionCreators; 
