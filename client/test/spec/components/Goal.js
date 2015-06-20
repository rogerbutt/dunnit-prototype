'use strict';

describe('Goal', function () {
  var React = require('react/addons');
  var Goal, component;

  beforeEach(function () {
    Goal = require('components/Goal.js');
    component = React.createElement(Goal);
  });

  it('should create a new instance of Goal', function () {
    expect(component).toBeDefined();
  });
});
