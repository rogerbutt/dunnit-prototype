
function generateMessage (user) {
	var msg = 'Welcome ';
	
	// Add name
	msg += user.name + '. ';
	
	console.log(user);
	
	if (user.goals.length === 0) {
		msg += 'You have no goals. Press New Goal to create a new goal.';
	}
	else {
		msg += 'You have ' + user.goals.length + ' goals.';
	}
	
	return msg;
};

var WelcomeMessageUtil = {
	generate: generateMessage
};

module.exports = WelcomeMessageUtil;