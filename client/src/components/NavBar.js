'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var LoginActionCreator = require('../actions/LoginActionCreators');
var Link = Router.Link;

//require('styles/NavBar.sass');

var NavBar = React.createClass({

  mixins : [Navigation],
  
  logout: function () {
    console.log('Logout');
    
    LoginActionCreator.logoutUser();
  },

  render: function () {
    return (
        <nav>
          <div className="left">
          	<h3><Link to="main">Dunnit</Link></h3>
          </div>

          <div className="right">
          	<Link to="account">Account</Link>
          </div>
          
          <button onClick={this.logout}>Log Out</button>
        </nav>
      );
  }
});

module.exports = NavBar; 

