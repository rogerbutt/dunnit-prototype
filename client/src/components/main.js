'use strict';

var DunnitPrototypeApp = require('./DunnitPrototypeApp');
var NewGoal = require('./NewGoal');
var MainSection = require('./MainSection');
var AccountPage = require('./AccountPage');
var GoalDetail = require('./GoalDetail');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var content = document.getElementById('content');

var Routes = (
  <Route name="app" path="/" handler={DunnitPrototypeApp}>
    <DefaultRoute handler={MainSection} />
    <Route name="main" handler={MainSection} />
    <Route name="new" handler={NewGoal} />
    <Route name="account" handler={AccountPage} />
    <Route name="goal" path="goal/:goalId" handler={GoalDetail}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
