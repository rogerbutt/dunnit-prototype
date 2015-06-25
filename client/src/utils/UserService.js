var request = require('superagent');
var Cookies = require('cookies-js');

var UserService = {
	
	getUser: function () {
		
		return new Promise(function (resolve, reject) {
			request
			.set('Authorization', 'Bearer ' + Cookies.get('token'))
			.get('http://localhost:9000/api/users/me')
			.end(function (res) {
				if (res.status === 404) {
					reject();
				} else {
					console.log(res);
					resolve(res.data);
				}
			});
		});
		
	}
	
};

module.exports = UserService;