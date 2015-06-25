var React = require('react/addons');
var Navigation = require('react-router').Navigation;

function makeAuthenticatedComponent(Component) {
	var AuthenticatedComponent = React.createClass({
		
		mixins: [Navigation],
		
		willTransitionTo: function () {
	      if (!UserStore.isLoggedIn()) {
	        this.transitionTo('/login');
	      }
	    },
		
		getInitialState: function () {
	  		return {
	  			slideIndex: 0,
	      		data: {}
	  		};
	  	},
		  
		render: function () {
			return (
				<Component>
				</Component>
			)
		}
		
	});
}

modules.exports = makeAuthenticatedComponent.bind(AuthenticatedComponent);