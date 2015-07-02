'use strict';

var React = require('react/addons');
var UserStore = require('../stores/UserStore');
var LoginActions = require('../actions/LoginActionCreators');
var Navigation = require('react-router').Navigation;

require('../styles/LoginComponent.css')

var LoginComponent = React.createClass({
  
  mixins: [Navigation],
  
  getInitialState: function () {    
    return {
      user: '',
      password: ''
    };
  },
  
  login: function(e) {
    e.preventDefault();
    
    LoginActions.loginUser(this.state.user, this.state.password)
      .catch(function(err) {
        console.log("Error logging in", err);
      });
  },
  
  _onChange: function () {
    if (UserStore.isLoggedIn()) {
      this.transitionTo('/');
    }
  },
  
  componentDidMount: function () {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    UserStore.removeChangeListener(this._onChange);
  },
  
  handleUserChange: function(event) {
    event.preventDefault();
    this.setState({ user: event.target.value });
  },
  
  handlePasswordChange: function(event) {
    event.preventDefault();
    this.setState({ password: event.target.value });
  },

  render: function () {
    
    return (
        <form role="form" className="LoginComponent">
          <div className="form-group">
            <input type="text" value={this.state.user} onChange={this.handleUserChange} />
            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          </div>
          <button type="submit" onClick={this.login}>Submit</button>
        </form>
      );
  }
});

module.exports = LoginComponent; 

