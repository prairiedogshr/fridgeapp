import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../app';
import Auth from '../components/login';
import Chores from '../containers/choresContainer';
import CreateHouse from '../containers/createHouseContainer';
import Dashboard from '../containers/dashboardContainer';
import Homeless from '../containers/homelessContainer';
import House from '../containers/houseContainer';
import HouseExpenses from '../containers/expensesContainer.jsx';
import Log from '../components/log.jsx';
import Profile from '../containers/profileContainer';
import Register from '../components/register.jsx';
import Settings from '../containers/settingsContainer';
import SignIn from '../containers/loginContainer.jsx';
import Tasks from '../containers/tasksContainer';
import User from '../components/user.jsx';
import { persistStore } from 'redux-persist';
import Join from '../containers/joinHouseContainer.jsx'



const Home = () => (
  <div>
    <h1>hold page</h1>
    <Link to="/app">App</Link>
    <br />
    <Link to="/chores">Chores</Link>
    <br />
    <Link to="/login">login</Link>
    <br />
    <Link to="/signin">Signup</Link>
    <br />
    <Link to="/tasks">Tasks</Link>
    <br />
    <Link to="/dashboard">Dashboard</Link>
    <br />
    <Link to="/settings">Settings</Link>
    <br />
    <Link to="/house">House</Link>
    <br />
    <Link to="/profile">profile</Link>
    <br />
    <Link to="/createhouse">Create House</Link>
    <br />
    <Link to="/homeless">homeless</Link>
    <br />
    <Link to="/houseexpenses">Expenses</Link>
    <Link to="/join">join</Link>
    <br />
  </div>
);


class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Auth} />
          <Route path="/signin" component={Auth} />
          <App>
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/chores" component={Chores} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/app" component={App} />
            <Route path="/settings" component={Settings} />
            <Route path="/house" component={House} />
            <Route path="/homeless" component={Homeless} />
            <Route path="/createhouse" component={CreateHouse} />
            <Route path="/houseexpenses" component={HouseExpenses} />
            <Route path="/join" component={Join} />
          </App>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
