var keyMirror = require('keymirror');

module.exports = {

	ActionTypes: keyMirror({
		UPDATE_USER: null,
		LOAD_USER: null,
		ADD_USER_GOAL: null
	}),

	PayloadSources: keyMirror({
		SERVER_ACTION: null,
		VIEW_ACTION: null
	})
	
};