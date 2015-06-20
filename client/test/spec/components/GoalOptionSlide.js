'use strict';

describe('GoalOptionSlide', function () {
  var React = require('react/addons');
  var GoalOptionSlide, component;

  beforeEach(function () {
    GoalOptionSlide = require('components/GoalOptionSlide.js');
    component = React.createElement(GoalOptionSlide);
  });

  it('should create a new instance of GoalOptionSlide', function () {
    expect(component).toBeDefined();
  });
});
