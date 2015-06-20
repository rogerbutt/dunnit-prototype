'use strict';

describe('GoalDetail', function () {
  var React = require('react/addons');
  var GoalDetail, component;

  beforeEach(function () {
    GoalDetail = require('components/GoalDetail.js');
    component = React.createElement(GoalDetail);
  });

  it('should create a new instance of GoalDetail', function () {
    expect(component).toBeDefined();
  });
});
