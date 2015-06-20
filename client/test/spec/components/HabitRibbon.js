'use strict';

describe('HabitRibbon', function () {
  var React = require('react/addons');
  var HabitRibbon, component;

  beforeEach(function () {
    HabitRibbon = require('components/HabitRibbon.js');
    component = React.createElement(HabitRibbon);
  });

  it('should create a new instance of HabitRibbon', function () {
    expect(component).toBeDefined();
  });
});
