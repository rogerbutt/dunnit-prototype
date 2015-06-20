'use strict';

describe('Discussion', function () {
  var React = require('react/addons');
  var Discussion, component;

  beforeEach(function () {
    Discussion = require('components/Discussion.js');
    component = React.createElement(Discussion);
  });

  it('should create a new instance of Discussion', function () {
    expect(component).toBeDefined();
  });
});
