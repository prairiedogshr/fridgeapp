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
import Error from '../components/pageNotFound'
import Settings from '../containers/settingsContainer';
import Tasks from '../containers/tasksContainer';
import requireAuth from '../components/require-auth'

import Welcome from '../containers/welcomeContainer';


class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <App>
            <div>
              <Route path="/dashboard" component={requireAuth(Dashboard)} />
              <Route path="/profile" component={requireAuth(Profile)} />
              <Route path="/house" component={requireAuth(House)} />
              <Route path="/chores" component={requireAuth(Chores)} />
              <Route path="/tasks" component={requireAuth(Tasks)} />
              <Route path="/bills" component={requireAuth(Bills)} />
              <Route path="/settings" component={requireAuth(Settings)} />
              <Route path="/createhouse" component={requireAuth(CreateHouse)} />
              <Route path="/join" component={requireAuth(Join)} />
              <Route path="/welcome" component={requireAuth(Welcome)} />
            </div>
          </App>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
