'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var DunnitPrototypeAppDispatcher = require('../dispatcher/DunnitPrototypeAppDispatcher');
var GoalConstants = require('../constants/GoalConstants');

var ActionTypes = GoalConstants.ActionTypes;

var CHANGE_EVENT = 'user_change';

var _user = {
	'name': 'Butts Carlton',
	'id': 1,
	'goals': []
};

function updateUser (user) {
	_user = user;
}

function addGoalToUser (goal) {
	_user.goals.push(goal);
}

var UserStore = assign({}, EventEmitter.prototype, {

	getUser: function () {
		return _user;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

	addChangeListener : function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener : function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}

});

UserStore.dispatchToken = DunnitPrototypeAppDispatcher.register(function(payload) {

var action = payload.action;

  switch(action.type) {
  	case ActionTypes.UPDATE_USER:
  		updateUser(action.user);
  		UserStore.emitChange();
  		break;
	case ActionTypes.ADD_USER_GOAL:
		addGoalToUser(action.goalId);
		UserStore.emitChange();
		break;
    default:
    	break;
  }

});

module.exports = UserStore; 
