import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import SignIn from '../containers/loginContainer.jsx';
import Dashboard from '../containers/dashboardContainer.jsx';
import Tasks from '../containers/tasksContainer.jsx';
import Profile from '../containers/profileContainer.jsx';
import App from '../App.jsx';
import Chores from '../containers/choresContainer.jsx';
import Settings from '../containers/settingsContainer.jsx';
import House from '../containers/houseContainer.jsx';

const Home = () => (
  <div>
    <h1>hold page</h1>
    <Link to="/app">App</Link>
    <br />
    <Link to="/chores">Chores</Link>
    <br />
    <Link to="/tasks">Tasks</Link>
    <br />
    <Link to="/dashboard">Dashboard</Link>
    <br />
    <Link to="/settings">Settings</Link>
    <Link to="/house">House</Link>
  </div>
);

const SignInHold = () => <div className="centered">
  <h3>LOGIN PAGE</h3>
  <a href="/#/dashboard"><h4>LOGIN SUCCESS</h4></a>
  <a href="/#/profile"><h4>SIGNUP SUCCESS</h4></a>
</div>;


const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={SignInHold} />
      <Route path="/signup" component={SignInHold} />
      <Route path="/profile" component={Profile} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/chores" component={Chores} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/signin" component={SignInHold} />
      <Route path="/app" component={App} />
      <Route path="/settings" component={Settings} />
      <Route path="/house" component={House} />
    </Switch>
  </HashRouter>
);

export default Routes;
