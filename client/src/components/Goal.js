'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Navigation = require('react-router').Navigation;
var Link = Router.Link;

require('styles/Goal.sass');

var Goal = React.createClass({

  propTypes: {
    goal: React.PropTypes.object.isRequired,
    key: React.PropTypes.string,
    doneFunc: React.PropTypes.func
  },

  render: function () {


    return (
        <div className="Goal">
          <div className="goal-information">
            <h2><Link to="goal" params={{'goalId': this.props.goal.id}}>{this.props.goal.text}</Link></h2>
            <p>{this.props.goal.date}</p>
          </div>
          
          <div className="goal-operations">
            <input type="checkbox" />
            <button onClick={this.props.doneFunc}>
              Accomplished
            </button>
          </div>
        </div>
      );
  }
});

module.exports = Goal; 

