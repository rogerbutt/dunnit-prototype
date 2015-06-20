'use strict';

var React = require('react/addons');




var LoginComponent = React.createClass({
  
  getInitialState: function () {
    return {
      user: '',
      password: ''
    };
  },
  
  login(e) {
    e.preventDefault();
    
    Auth.login(this.state.user, this.state.password)
      .catch(function(err) {
        console.log("Error logging in", err);
      });
  },

  render: function () {
    return (
        <form role="form">
        <div className="form-group>
          <input type="text" />
          <input type="password" />
        </div>
        <button type="submit" onClick={this.login.bind(this)}>Submit</button>
        </form>
        
      );
  }
});

module.exports = LoginComponent; 

