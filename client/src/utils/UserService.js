var request = require('superagent');
var Cookies = require('cookies-js');

var UserService = {
	
	getUser: function () {
		
		return new Promise(function (resolve, reject) {
			request
			.get('http://localhost:9000/api/users/me')
			.set('Authorization', 'Bearer ' + Cookies.get('token'))
			.end(function (err, res) {
				if (res.status === 404) {
					reject();
				} else {
					var data = JSON.parse(res.text);
					resolve(data);
				}
			});
		});
		
	}
	
};

module.exports = UserService;