(function () {
  'use strict';
}());

var React = require('react/addons');
var Navigation = require('react-router').Navigation;

var UserStore = require('../stores/UserStore');
var UserActionCreators = require('../actions/UserActionCreators');

//require('styles/AccountPage.sass');

function getStateFromStores() {

  var u = UserStore.getUser();

  return {
    user: u,
    //tempName: u.name
    tempName: "asdf"
  };
}

var AccountPage = React.createClass({

  mixins: [Navigation],

  getInitialState: function () {
  	return getStateFromStores();
  },

  _onChange: function (event) {
  	this.setState({
  		tempName: event.target.value
  	});
  },

  editUser: function (event) {
  	event.preventDefault();

  	this.state.user.name = this.state.tempName;

    UserActionCreators.updateUser(this.state.user);
  },

  render: function () {
    return (
        <div>
          <div className="account-image">Image</div>
          <input type="text" value={this.state.tempName} onChange={this._onChange} />

          <button onClick={this.editUser}>Edit</button>
        </div>
      );
  }
});

module.exports = AccountPage; 