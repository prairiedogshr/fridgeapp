import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { persistStore } from 'redux-persist';

import App from '../app';
import Auth from '../components/login';
import Chores from '../containers/choresContainer';
import CreateHouse from '../containers/createHouseContainer';
import Dashboard from '../containers/dashboardContainer';
import Homeless from '../containers/homelessContainer';
import House from '../containers/houseContainer';
import HouseExpenses from '../containers/expensesContainer';
import Join from '../containers/joinHouseContainer';
import Log from '../components/log';
import Login from '../components/login';
import { logoutUser } from '../actions/auth/auth';
import Profile from '../containers/profileContainer';
import Register from '../components/register';
import Settings from '../containers/settingsContainer';
import Tasks from '../containers/tasksContainer';
import User from '../components/user';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Auth} />
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
            <Route path="/bills" component={HouseExpenses} />
            <Route path="/join" component={Join} />
          </App>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
