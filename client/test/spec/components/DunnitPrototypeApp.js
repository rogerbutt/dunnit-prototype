'use strict';

describe('DunnitPrototypeApp', function () {
  var React = require('react/addons');
  var DunnitPrototypeApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    DunnitPrototypeApp = require('components/DunnitPrototypeApp.js');
    component = React.createElement(DunnitPrototypeApp);
  });

  it('should create a new instance of DunnitPrototypeApp', function () {
    expect(component).toBeDefined();
  });
});
