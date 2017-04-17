import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { persistStore } from 'redux-persist';

import App from '../app';
import Login from '../components/login';
import Signin from '../components/register.jsx';
import Chores from '../containers/choresContainer';
import CreateHouse from '../containers/createHouseContainer';
import Dashboard from '../containers/dashboardContainer';
import Homeless from '../containers/homelessContainer';
import House from '../containers/houseContainer';
import HouseExpenses from '../containers/expensesContainer';
import Join from '../containers/joinHouseContainer';
import Profile from '../containers/profileContainer';
import Settings from '../containers/settingsContainer';
import Tasks from '../containers/tasksContainer';
import requireAuth from '../components/require-auth.jsx'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path = '/' component= {Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component = {Signin} />
          <App>
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
            <Route path="/profile" component={requireAuth(Profile)} />
            <Route path="/house" component={requireAuth(House)} />
            <Route path="/chores" component={requireAuth(Chores)} />
            <Route path="/tasks" component={requireAuth(Tasks)} />
            <Route path="/bills" component={requireAuth(HouseExpenses)} />
            <Route path="/settings" component={requireAuth(Settings)} />
            <Route path="/homeless" component={requireAuth(Homeless)} />
            <Route path="/createhouse" component={requireAuth(CreateHouse)} />
            <Route path="/join" component={requireAuth(Join)} />
          </App>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
