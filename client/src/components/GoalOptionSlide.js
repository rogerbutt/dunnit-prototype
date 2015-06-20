'use strict';

var React = require('react/addons');

var Slide = require('../mixins/Slide');


var GoalOptionSlide = React.createClass({
  
  mixins: [Slide],

  propTypes: {
    content: React.PropTypes.string,
    additionFunc: React.PropTypes.func
  },
  
  addOption: function () {
    var tempGoal = this.props.data;
    tempGoal = this.props.additionFunc(tempGoal);
    this._nextSlide(tempGoal);
  },
  
  optOut: function () {
    this._nextSlide(this.props.data);
  },

  render: function () {
    return (
        <div>
          <p>{this.props.content}</p>
          <button onClick={this.addOption}>Add it</button>
          <a onClick={this.optOut}>I don't need it</a>
        </div>
      );
  }
});

module.exports = GoalOptionSlide; 

