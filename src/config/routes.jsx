import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { persistStore } from 'redux-persist';

import App from '../app';
import Bills from '../containers/expensesContainer';
import Chores from '../containers/choresContainer';
import CreateHouse from '../containers/createHouseContainer';
import Dashboard from '../containers/dashboardContainer';
import House from '../containers/houseContainer';
import Join from '../containers/joinHouseContainer';
import Login from '../components/login';
import Profile from '../containers/profileContainer';
import Signup from '../components/signup';
import Settings from '../containers/settingsContainer';
import Tasks from '../containers/tasksContainer';
import requireAuth from '../components/require-auth.jsx'

import Welcome from '../containers/welcomeContainer';


class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route path= '/' component= {Login} /> */}
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <App>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/house" component={House} />
            <Route path="/chores" component={Chores} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/bills" component={Bills} />
            <Route path="/settings" component={Settings} />
            <Route path="/createhouse" component={CreateHouse} />
            <Route path="/join" component={Join} />
            <Route path="/welcome" component={Welcome} />

          </App>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
