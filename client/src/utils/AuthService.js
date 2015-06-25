var request = require('superagent');

var Auth = {
	
	login: function (username, password) {
		
		return new Promise(function (resolve, reject) {
			request
			.post('http://localhost:9000/auth/local', {
				email: user.email,
				password: user.password
			})
			.end(function (res) {
				if (res.status === 404) {
					reject();
				} else {
					resolve(res.token);
				}
			});
		});
		
	}
	
};

module.exports = Auth;