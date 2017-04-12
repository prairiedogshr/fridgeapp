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
            <Route path="/settings" component={Settings} />
            <Route path="/house" component={House} />
            <Route path="/homeless" component={Homeless} />
            <Route path="/createhouse" component={CreateHouse} />
            {/* <Route path="/joinhouse" component={JoinHouse} /> */}
            <Route path="/houseexpenses" component={HouseExpenses} />
          </App>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
