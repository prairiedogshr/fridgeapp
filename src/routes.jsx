import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { persistStore } from 'redux-persist';

import App from './app';
import Auth from './components/login';
import Chores from './containers/choresContainer';
import CreateHouse from './containers/createHouseContainer';
import Dashboard from './containers/dashboardContainer';
import Homeless from './containers/homelessContainer';
import House from './containers/houseContainer';
import Profile from './containers/profileContainer';
import Settings from './containers/settingsContainer';
import Tasks from './containers/tasksContainer';

export default (
  <Router>
    <Route path="/" component={App} >
      <Route path="login" component={Auth} />
      <Route path="signin" component={Auth} />
      <Route path="profile" component={Profile} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="chores" component={Chores} />
      <Route path="tasks" component={Tasks} />
      <Route path="settings" component={Settings} />
      <Route path="house" component={House} />
      <Route path="homeless" component={Homeless} />
      <Route path="createhouse" component={CreateHouse} />
    </Route>
  </Router>
);
