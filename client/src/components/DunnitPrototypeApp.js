'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Link = Router.Link;

var MainSection = require('./MainSection');
var NavBar = require('./NavBar');

// CSS
require('normalize.css');
require('../styles/main.css');

var DunnitPrototypeApp = React.createClass({
  
  getInitialState: function () {
    return {
      loggedIn: Auth.isLoggedIn()
    };
  },
  
  setStateOnAuth: function (loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  },
  
  componentWillMount: function () {
    Auth.onChange = this.setStateOnAuth.bind(this);
  },
  
  render: function () {
    return (
      <div className='main'>
      	<NavBar />
      	<div className='main-content'>
      		<RouteHandler/>
      	</div>
      </div>
    );
  }
});

module.exports = DunnitPrototypeApp;
