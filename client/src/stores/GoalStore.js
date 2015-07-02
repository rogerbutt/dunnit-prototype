'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var DunnitPrototypeAppDispatcher = require('../dispatcher/DunnitPrototypeAppDispatcher');
var GoalConstants = require('../constants/GoalConstants');

var UserActionCreators = require('../actions/UserActionCreators');

var ActionTypes = GoalConstants.ActionTypes;

var CHANGE_EVENT = 'goal_change';

var _goals = {
};

function create(goalData) {
	var id = Date.now();

	var monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
    ];

    var date = new Date();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var d = day + ' ' + monthNames[monthIndex] + ' ' + year;
	
	var goalObj = {
		id: id,
		date: d,
		complete: false,
		comments: []
	};
	
	for(var key in goalData) {
		goalObj[key] = goalData[key];
	}
	
	_goals[id] = goalObj;

}

function updateGoal (data, id) {
	for(var key in data) {
		_goals[id][key] = data[key];
	}
}

function addComment(goalId, commentText, user) {
	console.log(goalId);
	if(_goals[goalId]) {
		console.log('asdf');
		_goals[goalId].comments = _goals[goalId].comments || [];
		_goals[goalId].comments.push({
			commentText: commentText,
			user: user
		});
	}
}

function destroy(id) {
	delete _goals[id];
}

function finishGoal(id) {
	destroy(id);
}

var GoalStore = assign({}, EventEmitter.prototype, {

	getAll: function() {
		return _goals;
	},

	getAllText: function() {
		var id,
			goalsText = [];
		for(id in _goals) {
			goalsText.push(_goals[id].text);
		}

		return goalsText;
	},
	
	getGoal: function (id) {
		return _goals[id];
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

GoalStore.dispatchToken = DunnitPrototypeAppDispatcher.register(function(payload) {

  var action = payload.action;

  switch(action.type) {
  	case ActionTypes.CREATE_GOAL:
	  	console.log(action.goalData);
  		var newId = create(action.goalData);
  		GoalStore.emitChange();
		//UserActionCreators.addUserGoal(newId);
  		break;
  	case ActionTypes.FINISH_GOAL:
  		finishGoal(action.id);
  		GoalStore.emitChange();
  		break;
	case ActionTypes.SUBMIT_COMMENT:
		addComment(action.comment.goalId, action.comment.commentText, action.comment.user);
		GoalStore.emitChange();
		break;
	case ActionTypes.UPDATE_GOAL:
		updateGoal(action.data.data, action.data.id);
		GoalStore.emitChange();
    default:
    	break;
  }

});

module.exports = GoalStore; 
