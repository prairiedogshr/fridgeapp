import React, { Component } from 'react'
import { render } from 'react-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import SignIn from '../containers/loginContainer.jsx';
import Dashboard from '../containers/dashboardContainer.jsx';
import Tasks from '../containers/tasksContainer.jsx';
import App from '../App.jsx'
import Chores from '../components/chores.jsx';
const Home = () => (
	<div>
	<h1>Hello World!</h1>
	<Link to="/app">App</Link>
	<br />
	<Link to="/chores">Chores</Link>
	</div>
	)
const Home2 = () => <h3>Hello? World?</h3>

const Routes = () => (
	<HashRouter>
		<Switch>
  		<Route exact path="/" component={Home} />
  		<Route path="/dashboard" component={Dashboard} />
			<Route path="/chores" component={Chores} />
  		<Route path="/tasks" component={Tasks} />
  		<Route path="/signin" component={SignIn} />
  		<Route path="/app" component={App} />
  	</Switch>
  </HashRouter>
)

export default Routes;
