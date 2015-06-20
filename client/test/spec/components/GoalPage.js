'use strict';

describe('GoalPage', function () {
  var React = require('react/addons');
  var GoalPage, component;

  beforeEach(function () {
    GoalPage = require('components/GoalPage.js');
    component = React.createElement(GoalPage);
  });

  it('should create a new instance of GoalPage', function () {
    expect(component).toBeDefined();
  });
});
