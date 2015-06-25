'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var DunnitPrototypeAppDispatcher = require('../dispatcher/DunnitPrototypeAppDispatcher');
var UserConstants = require('../constants/UserConstants');
var request = require('superagent');

var ActionTypes = UserConstants.ActionTypes;

var CHANGE_EVENT = 'user_change';

var _user = null;

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
	
	isLoggedIn: function () {
		return !!_user;	
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
	case ActionTypes.LOAD_USER:
		_user = action.user;
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
