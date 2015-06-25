'use strict';

var React = require('react/addons');
var Navigation = require('react-router').Navigation;

//require('styles/SlideArea.sass');

var SlideArea = React.createClass({

  mixins: [Navigation],

  propTypes: {
    slides: React.PropTypes.array,
    completeFunc: React.PropTypes.func
  },

  getInitialState : function () {
  	return {
  		slideIndex: 0,
      data: {}
  	};
  },

  _next: function (data) {
    console.log(data);
  	var sIndex = this.state.slideIndex + 1;
  	if(sIndex === this.props.slides.length) {
      if(this.props.completeFunc) {
        this.props.completeFunc(data);
      }

      this.transitionTo('/');
    }

    this.setState({slideIndex: sIndex, data: data});
  },

  _prev: function () {
    var sIndex = this.state.slideIndex - 1;
    if(sIndex < 0) {
      sIndex = 0;
    }

    this.setState({slideIndex: sIndex});
  },

  render: function () {

  	var currentSlide = this.props.slides[this.state.slideIndex];
    if (currentSlide) {
      currentSlide.props._next = this._next;
      currentSlide.props.data = this.state.data;
    }

    return (
        <div>
          {currentSlide}
        </div>
      );
  }
});

module.exports = SlideArea; 

