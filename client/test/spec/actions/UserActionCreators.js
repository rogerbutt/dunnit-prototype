'use strict';

describe('UserActionCreators', function() {
  var action;

  beforeEach(function() {
    action = require('actions/UserActionCreators.js');
  });

  it('should be defined', function() {
    expect(action).toBeDefined();
  });
});
