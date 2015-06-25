(function () {
  'use strict';
}());


var React = require('react/addons');

var Comment = React.createClass({
  
  propTypes: {
    comment: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
        <div>
          {this.props.comment.commentText}
        </div>
      );
  }
});

module.exports = Comment; 

