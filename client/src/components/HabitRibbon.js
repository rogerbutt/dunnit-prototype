'use strict';

var React = require('react/addons');
var GoalActionCreators = require('../actions/GoalActionCreators');

var HabitRibbon = React.createClass({
  
  propTypes: {
    habitCount: React.PropTypes.number,
    id: React.PropTypes.number
  },
  
  updateRibbon: function () {
    GoalActionCreators.updateGoal({ habitRibbon: this.props.habitCount + 1 }, this.props.id);
  },

  render: function () {
    return (
        <div>
          <p>HabitRibbon</p>
          <h3>{this.props.habitCount}</h3>
          <button onClick={this.updateRibbon}>Did it</button>
        </div>
      );
  }
});

module.exports = HabitRibbon;

