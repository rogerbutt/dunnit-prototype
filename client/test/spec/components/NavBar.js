'use strict';

describe('NavBar', function () {
  var React = require('react/addons');
  var NavBar, component;

  beforeEach(function () {
    NavBar = require('components/NavBar.js');
    component = React.createElement(NavBar);
  });

  it('should create a new instance of NavBar', function () {
    expect(component).toBeDefined();
  });
});
