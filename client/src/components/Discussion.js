'use strict';

var React = require('react/addons');
var GoalActionCreators = require('../actions/GoalActionCreators');

var Comment = require('./Comment');

var ENTER_KEY_CODE = 13;

var Discussion = React.createClass({

  propTypes: {
    goal: React.PropTypes.object.isRequired,
    userId: React.PropTypes.number
  },

  getInitialState: function (params) {
    return {
      newComment: ''
    };
  },

  _submitComment: function(event) {
    event.preventDefault();
    
    if (this.state.newComment) {
      console.log('In componenet');
      console.log(this.props.goal.id);
      GoalActionCreators.submitComment(this.props.goal.id, this.state.newComment, this.props.userId);
      this.setState({ newComment: '' });
    }
  },
  
  _onChange: function(event) {
    this.setState({
      newComment: event.target.value
    });
  },
  
  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
  		this._submitComment(event);
  	}
  },

  render: function () {
    
    var newCommentSection;
    if (this.props.userId) {
      newCommentSection = (
          <div>
            <input type='text'
                   value={this.state.newComment}
                   onKeyDown={this._onKeyDown}
                   onChange={this._onChange} />
            <button onClick={this._submitComment}>Submit</button>
          </div>)
    }
    
    var comments = [];
    if (this.props.goal.comments) {
      for(var i = 0; this.props.goal && i < this.props.goal.comments.length; i++) {
        comments.push(<Comment comment={this.props.goal.comments[i]} />);
      }
    }
    
    return (
        <div>
          <h2>Discussion</h2>
          {comments}
          {newCommentSection}
        </div>
      );
  }
});

module.exports = Discussion; 

