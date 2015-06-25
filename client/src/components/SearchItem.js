'use strict';

var React = require('react/addons');


//require('styles/SearchItem.sass');

var SearchItem = React.createClass({

  propTypes: {
  	item: React.PropTypes.object
  },

  render: function () {
    return (
        <div>
          <p>{this.props.item.text}</p>
        </div>
      );
  }
});

module.exports = SearchItem; 

