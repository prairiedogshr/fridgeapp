import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from '../containers/loginContainer.jsx';
import Log from '../components/log.jsx';
import Auth from '../components/login.jsx';
import Dashboard from '../containers/dashboardContainer.jsx';
import Tasks from '../containers/tasksContainer.jsx';
import Profile from '../containers/profileContainer.jsx';
import App from '../app.jsx';
import Register from '../components/register.jsx';
import Chores from '../containers/choresContainer.jsx';
import Settings from '../containers/settingsContainer.jsx';
import CreateHouse from '../containers/createHouseContainer.jsx';
import HouseExpenses from '../containers/expensesContainer.jsx';
import Homeless from '../containers/homelessContainer.jsx';
import House from '../containers/houseContainer.jsx';
import User from '../components/user.jsx';

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
          </App>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
