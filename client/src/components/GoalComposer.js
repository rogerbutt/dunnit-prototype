'use strict';

var React = require('react/addons');
var Navigation = require('react-router').Navigation;

var GoalActionCreators = require('../actions/GoalActionCreators');
var GoalStore = require('../stores/GoalStore');

var SearchItem = require('./SearchItem');

var Slide = require('../mixins/Slide');

var ENTER_KEY_CODE = 13;

require('styles/GoalComposer.sass');

var GoalComposer = React.createClass({

  mixins: [Navigation, Slide],

  getInitialState: function() {
  	return {
      text: '',
      goals: GoalStore.getAllText(),
      filteredGoals: []
    };
  },

  _createSearchFilter: function(searchTerm) {
    return function (goal) {
      var tokens = goal.split(" ");

      for(var i = 0; i < tokens.length; i++) {
        if (tokens[i] && tokens[i].search(searchTerm) !== -1) {
          return true;
        }
      }

      return false;
    };
  },

  _onChange: function(event, value) {
  	this.setState({
      text: event.target.value
    }, function () {
      if (this._throttleTimeout) {
        clearTimeout(this._throttleTimeout);
      }

      this._throttleTimeout = setTimeout(function() {
        if(this.state.text.length > 0) {
          var _searchFilter = this._createSearchFilter(this.state.text);
          this.setState({filteredGoals: this.state.goals.filter(_searchFilter)});
        }
      }.bind(this), 100);
    }.bind(this));    
  },

  _onKeyDown: function(event) {
  	if (event.keyCode === ENTER_KEY_CODE) {
  		this._create(event);
  	}
  },

  _create: function(event) {
    event.preventDefault();
    var text = this.state.text.trim();
    if (text) {
      
      var tempData = this.props.data;
      tempData.text = text;
      
      this._nextSlide(tempData);
    }
  },

  _chooseOld: function(id) {
    console.log(id);
  },

  render: function () {

    var searchResultsComponents = [];
    var searchResults = this.state.filteredGoals;

    if(this.state.text.length > 0) {
      var length = searchResults.length < 5 ? searchResults.length : 5;

      for(var i = 0; i < length; i++) {
        searchResultsComponents.push(<SearchItem item={{'text': searchResults[i]}} onClick={this._chooseOld.bind(this, i)} />);
      }
    }

    return (
        <div>
          <p>Create a new goal or find existing goals</p>
          <input
          	className="goal-composer"
          	name="goal"
          	value={this.state.text}
          	onChange={this._onChange}
          	onKeyDown={this._onKeyDown}
          	type="text" />
          <br />
          <button onClick={this._create}>Create</button>
          <h2>Similiar goals</h2>
          {searchResultsComponents}
        </div>
      );
  }
});

module.exports = GoalComposer; 

