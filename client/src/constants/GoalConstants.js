var keyMirror = require('keymirror');

module.exports = {

	ActionTypes: keyMirror({
		CREATE_GOAL: null,
		FINISH_GOAL: null,
		UPDATE_GOAL: null,
		SUBMIT_COMMENT: null,
	}),

	PayloadSources: keyMirror({
		SERVER_ACTION: null,
		VIEW_ACTION: null
	})
	
};