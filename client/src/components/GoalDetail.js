'use strict';

var React = require('react/addons');
var Router = require('react-router');
var GoalStore = require('../stores/GoalStore');
var UserStore = require('../stores/UserStore');

var Discussion = require('./Discussion');
var HabitRibbon = require('./HabitRibbon');

//require('styles/GoalDetail.sass');

var GoalDetail = React.createClass({
  
  getInitialState: function () {
    
    var tempGoal = {};
    if (this.props.params.goalId) {
      tempGoal = GoalStore.getGoal(this.props.params.goalId);
    }
    
    return {
      goal: tempGoal,
      user: UserStore.getUser()
    };
  },
  
  componentDidMount: function () {
    var id = this.props.params.goalId;
  	this.setState({ goal: GoalStore.getGoal(id) });
    GoalStore.addChangeListener(this._onChange);
  },
  
  componentWillUnmount: function () {
    GoalStore.removeChangeListener(this._onChange);
  },
  
  _onChange: function () {
    var id = this.props.params.goalId;
    this.setState({ goal: GoalStore.getGoal(id) });
    console.log("Updated");
    console.log(this.state.goal);
  },

  render: function () {
    
    var goalOptions = [];
    
    if (this.state.goal.habitRibbon !== undefined) {
      goalOptions.push(<HabitRibbon habitCount={this.state.goal.habitRibbon} id={this.state.goal.id} />);
    }
    
    return (
        <div>
          <h2>{this.state.goal.text}</h2>
          {goalOptions}
          <Discussion goal={this.state.goal} userId={this.state.user.id} />
        </div>
      );
  }
});

module.exports = GoalDetail; 

