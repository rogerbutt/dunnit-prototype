'use strict';

describe('SlideArea', function () {
  var React = require('react/addons');
  var SlideArea, component;

  beforeEach(function () {
    SlideArea = require('components/SlideArea.js');
    component = React.createElement(SlideArea);
  });

  it('should create a new instance of SlideArea', function () {
    expect(component).toBeDefined();
  });
});
