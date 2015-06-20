'use strict';

var React = require('react/addons');
var Navigation = require('react-router').Navigation;

var GoalComposer = require('./GoalComposer');
var SlideArea = require('./SlideArea');
var SmartForm = require('./SmartForm');
var GoalActionCreators = require('../actions/GoalActionCreators');
var GoalOptionSlide = require('./GoalOptionSlide');

require('styles/NewGoal.sass');

var HabitRibbonOption = {
  additionFunction: function (data) {
    data.habitRibbon = 0;
    return data;
  },
  content: 'From our data, users were 23% more likely to achieve their goals using a habit ribbon. Would you like to use it?'
};

var SmartFormOption = {
  additionFunction: function (data) {
    data.smartForm = true;
    return data;
  },
  content: 'From our data, users were 23% more likely to achieve their goals using a smart forms. Would you like to use it?'
};

var NewGoal = React.createClass({

  mixins: [Navigation],

  getInitialState: function () {
  	return {
  		slideIndex: 0
  	};
  },
  
  _makeGoal: function(data) {
    GoalActionCreators.createGoal(data);
  },

  render: function () {

  	var slides = [
  		<GoalComposer />,
      <GoalOptionSlide content={SmartFormOption.content} additionFunc={SmartFormOption.additionFunction} />,
      <GoalOptionSlide content={HabitRibbonOption.content} additionFunc={HabitRibbonOption.additionFunction} />
  	];

    return (
        <div>
          <SlideArea slides={slides} completeFunc={this._makeGoal} />
        </div>
      );
  }
});

module.exports = NewGoal; 

