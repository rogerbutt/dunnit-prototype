'use strict';

var DunnitAppDispatcher = require('../dispatcher/DunnitPrototypeAppDispatcher');
var UserConstants = require('../constants/UserConstants');

var ActionTypes = UserConstants.ActionTypes;

var UserActionCreators = {

	updateUser: function(user) {
		DunnitAppDispatcher.handleViewAction({
			type: ActionTypes.UPDATE_USER,
			user: user
		});
	},
	
	addUserGoal: function(goalId) {
		DunnitAppDispatcher.handleViewAction({
			type: ActionTypes.ADD_USER_GOAL,
			goalId: goalId
		})
	}

};

module.exports = UserActionCreators; 
