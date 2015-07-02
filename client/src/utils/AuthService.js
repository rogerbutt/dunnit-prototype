var request = require('superagent');

var Auth = {
	
	login: function (username, password) {
		
		return new Promise(function (resolve, reject) {
			request
			.post('http://localhost:9000/auth/local', {
				email: username,
				password: password
			})
			.end(function (err, res) {
				if (res && res.status === 404) {
					reject();
				} else {
					var data = JSON.parse(res.text);
					resolve(data.token);
				}
			});
		});
		
	},
	
	handleLogin: function(token) {
		Cookies.set('token', token);
		return UserService.getUser();
	}
	
};

module.exports = Auth;