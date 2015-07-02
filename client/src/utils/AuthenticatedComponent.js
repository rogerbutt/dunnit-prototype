var React = require('react/addons');
var Navigation = require('react-router').Navigation;
var UserStore = require('../stores/UserStore');
var RouterContainer = require('./RouterContainer');

function makeAuthenticatedComponent(Component) {
	var AuthenticatedComponent = React.createClass({
		
		mixins: [Navigation],
		
	    statics: {
	      willTransitionTo: function(transition) {
			if(!UserStore.isLoggedIn()) {
				transition.redirect('/login', {}, {'nextPath' : transition.path});
			}
	      }
	    },
		
		getInitialState: function () {
	  		return {
	  			slideIndex: 0,
	      		data: {}
	  		};
	  	},
		
		_onChange: function () {
			if (!UserStore.isLoggedIn()) {
				RouterContainer.get().transitionTo('login');
			}
		},
		  
		componentDidMount: function () {
			UserStore.addChangeListener(this._onChange);
		},
		  
		render: function () {
			return (
				<Component />
			)
		}
		
	});
	
	return AuthenticatedComponent;
}

module.exports = makeAuthenticatedComponent;