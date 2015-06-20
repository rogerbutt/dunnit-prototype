'use strict';

var DunnitAppDispatcher = require('../dispatcher/DunnitPrototypeAppDispatcher');
var GoalConstants = require('../constants/GoalConstants');

var ActionTypes = GoalConstants.ActionTypes;

var GoalActionCreators = {

	createGoal: function(goalData) {
		DunnitAppDispatcher.handleViewAction({
			type: ActionTypes.CREATE_GOAL,
			goalData: goalData
		});
	},

	finishGoal: function(id) {
		DunnitAppDispatcher.handleViewAction({
			type: ActionTypes.FINISH_GOAL,
			id: id
		});
	},
	
	updateGoal: function(data, id) {
		DunnitAppDispatcher.handleViewAction({
			type: ActionTypes.UPDATE_GOAL,
			data: {
				data: data,
				id: id
			}
		});
	},
	
	submitComment: function(goalId, commentText, user) {
		DunnitAppDispatcher.handleViewAction({
			type: ActionTypes.SUBMIT_COMMENT,
			comment: {
				goalId: goalId,
				commentText: commentText,
				user: user
			}
		});
	}

};

module.exports = GoalActionCreators; 
