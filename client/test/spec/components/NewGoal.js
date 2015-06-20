'use strict';

describe('NewGoal', function () {
  var React = require('react/addons');
  var NewGoal, component;

  beforeEach(function () {
    NewGoal = require('components/NewGoal.js');
    component = React.createElement(NewGoal);
  });

  it('should create a new instance of NewGoal', function () {
    expect(component).toBeDefined();
  });
});
