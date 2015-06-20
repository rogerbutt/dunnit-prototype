'use strict';

describe('LoginComponent', function () {
  var React = require('react/addons');
  var LoginComponent, component;

  beforeEach(function () {
    LoginComponent = require('components/LoginComponent.js');
    component = React.createElement(LoginComponent);
  });

  it('should create a new instance of LoginComponent', function () {
    expect(component).toBeDefined();
  });
});
