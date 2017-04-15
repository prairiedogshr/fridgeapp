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

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component = {Signin} />
          <App>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/house" component={House} />
            <Route path="/chores" component={Chores} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/bills" component={HouseExpenses} />
            <Route path="/settings" component={Settings} />
            <Route path="/homeless" component={Homeless} />
            <Route path="/createhouse" component={CreateHouse} />
            <Route path="/join" component={Join} />
          </App>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
