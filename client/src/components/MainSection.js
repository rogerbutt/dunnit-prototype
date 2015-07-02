'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var Goal = require('./Goal');
var GoalComposer = require('./GoalComposer');
var GoalStore = require('../stores/GoalStore');
var GoalActionCreators = require('../actions/GoalActionCreators');
var UserStore = require('../stores/UserStore');

var AuthenticatedComponent = require('../utils/AuthenticatedComponent');

var WelcomeMessageUtil = require('../utils/WelcomeMessageUtil');

//require('styles/MainSection.sass');

function getStateFromStores() {
  
  var usr = UserStore.getUser();
  var msg = "";
  if (usr) {
    msg = WelcomeMessageUtil.generate(usr);
  }
  
  return {
    goals: GoalStore.getAll(),
    user: usr,
    welcomeMsg: msg
  };
}

function createFinishHandler (id) {
  return function (event) {
    GoalActionCreators.finishGoal(id);
  };
}

var MainSection = React.createClass({

  getInitialState: function () {
    return getStateFromStores();
  },

  componentDidMount: function () {
    GoalStore.addChangeListener(this._onChange);
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    GoalStore.removeChangeListener(this._onChange);
    UserStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState(getStateFromStores());
  },

  render: function () {

  	var allGoals = this.state.goals;
  	var goals = [];

  	for (var key in allGoals) {
  	  goals.push(<Goal id={key} goal={allGoals[key]} doneFunc={createFinishHandler(key)} />);
  	}

    return (
          <div>
            <h4>{this.state.welcomeMsg}</h4>
            <Link to="new">New Goal</Link>
            {goals}
          </div>
      );
  }
});

module.exports = AuthenticatedComponent(MainSection); 

