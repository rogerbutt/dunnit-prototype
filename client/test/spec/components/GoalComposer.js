'use strict';

describe('GoalComposer', function () {
  var React = require('react/addons');
  var GoalComposer, component;

  beforeEach(function () {
    GoalComposer = require('components/GoalComposer.js');
    component = React.createElement(GoalComposer);
  });

  it('should create a new instance of GoalComposer', function () {
    expect(component).toBeDefined();
  });
});
