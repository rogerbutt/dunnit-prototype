'use strict';

var DunnitPrototypeApp = require('./DunnitPrototypeApp');
var NewGoal = require('./NewGoal');
var MainSection = require('./MainSection');
var AccountPage = require('./AccountPage');
var GoalDetail = require('./GoalDetail');
var LoginActions = require('../actions/LoginActionCreators');
var LoginComponent = require('./LoginComponent');
var RouterContainer = require('../utils/RouterContainer');
var React = require('react');
var Router = require('react-router');
var Cookies = require('cookies-js');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Routes = (
  <Route handler={DunnitPrototypeApp}>
    <Route name="main" path="/" handler={MainSection} />
    <Route name="new" path="/new" handler={NewGoal} />
    <Route name="account" path="/account" handler={AccountPage} />
    <Route name="goal" path="goal/:goalId" handler={GoalDetail} />
    <Route name="login" path="/login" handler={LoginComponent} />
  </Route>
);

var router = Router.create({routes: Routes});
RouterContainer.set(router);

var token = Cookies.get('token');
if(token) {
  LoginActions.loadUser(token);
}

var content = document.getElementById('content');

router.run(function (Handler) {
  React.render(<Handler />, content);
});
