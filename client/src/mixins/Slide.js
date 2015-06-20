'use strict';

var React = require('react/addons');

var Slide = {
  propTypes: {
	  _next: React.PropTypes.func,
    data: React.PropTypes.object
  },

  _nextSlide: function(data) {
  	this.props._next(data);
  },
};

module.exports = Slide;