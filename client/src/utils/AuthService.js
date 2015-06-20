var Cookies = require('cookies-js');
var request = require('superagent');

var Auth = {
	
	login: function (username, password) {
		
		return new Promise(function (resolve, reject) {
			request
			.post('/auth/local', {
				email: user.email,
				password: user.password
			})
			.end(function (res) {
				if (res.status === 404) {
					reject();
				} else {
					Cookies.set('token', res.token);
					
					resolve(JSON.parse(res.text));
				}
			});
		});
		
	}
	
};

module.exports = Auth;