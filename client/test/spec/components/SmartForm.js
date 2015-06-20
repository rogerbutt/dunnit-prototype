'use strict';

describe('SmartForm', function () {
  var React = require('react/addons');
  var SmartForm, component;

  beforeEach(function () {
    SmartForm = require('components/SmartForm.js');
    component = React.createElement(SmartForm);
  });

  it('should create a new instance of SmartForm', function () {
    expect(component).toBeDefined();
  });
});
