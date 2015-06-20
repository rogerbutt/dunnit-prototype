'use strict';

describe('SearchItem', function () {
  var React = require('react/addons');
  var SearchItem, component;

  beforeEach(function () {
    SearchItem = require('components/SearchItem.js');
    component = React.createElement(SearchItem);
  });

  it('should create a new instance of SearchItem', function () {
    expect(component).toBeDefined();
  });
});
