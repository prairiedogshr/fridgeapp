import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import SignIn from '../containers/loginContainer.jsx';
import Log from '../components/log.jsx';
import Auth from '../components/login.jsx';
import Dashboard from '../containers/dashboardContainer.jsx';
import Tasks from '../containers/tasksContainer.jsx';
import Profile from '../containers/profileContainer.jsx';
import App from '../App.jsx';
import Register from '../components/register.jsx';
import Chores from '../containers/choresContainer.jsx';
import Settings from '../containers/settingsContainer.jsx';
import CreateHouse from '../containers/createHouseContainer.jsx';
import HouseExpenses from '../containers/expensesContainer.jsx';
import Homeless from '../containers/homelessContainer.jsx';
import House from '../containers/houseContainer.jsx';
import User from '../components/user.jsx';
import { persistStore } from 'redux-persist';


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
    <br />
  </div>
);


class Routes extends Component {

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Auth} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/chores" component={Chores} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/signin" component={Auth} />
          <Route path="/app" component={App} />
          <Route path="/settings" component={Settings} />
          <Route path="/house" component={House} />
          <Route path="/homeless" component={Homeless} />
          <Route path="/createhouse" component={CreateHouse} />
          <Route path="/houseexpenses" component={HouseExpenses} />
        </Switch>
      </HashRouter>
    );
  }
}
export default Routes;
