'use strict';

var React = require('react/addons');

var Slide = require('../mixins/Slide');

//require('styles/SmartForm.sass');

var SmartForm = React.createClass({

  mixins: [Slide],
  
  addSmartForm: function () {
    var tempGoal = this.props.data;
    tempGoal.smartForm = true;
    
    this._nextSlide(tempGoal);
  },

  render: function () {

    return (
        <div>
          <p>Content for SmartForm</p>
          <button onClick={this.addSmartForm}>Next</button>
        </div>
      );
  }
});

module.exports = SmartForm; 

