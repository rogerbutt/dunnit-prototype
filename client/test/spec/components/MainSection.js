'use strict';

describe('MainSection', function () {
  var React = require('react/addons');
  var MainSection, component;

  beforeEach(function () {
    MainSection = require('components/MainSection.js');
    component = React.createElement(MainSection);
  });

  it('should create a new instance of MainSection', function () {
    expect(component).toBeDefined();
  });
});
