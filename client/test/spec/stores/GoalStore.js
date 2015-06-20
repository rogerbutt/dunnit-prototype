'use strict';

describe('GoalStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/GoalStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
