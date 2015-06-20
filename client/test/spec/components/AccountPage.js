'use strict';

describe('AccountPage', function () {
  var React = require('react/addons');
  var AccountPage, component;

  beforeEach(function () {
    AccountPage = require('components/AccountPage.js');
    component = React.createElement(AccountPage);
  });

  it('should create a new instance of AccountPage', function () {
    expect(component).toBeDefined();
  });
});
