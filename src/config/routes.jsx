import React, { Component } from 'react'
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import SignIn from '../containers/loginContainer.jsx';
import Dashboard from '../containers/dashboardContainer.jsx';
import Tasks from '../containers/tasksContainer.jsx';
import App from '../App.jsx'

const Home = () => (
	<div>
	<h1>Hello World!</h1>
	<Link to="/app">App</Link>
	</div>
	)
const Home2 = () => <h3>Hello? World?</h3>

const Routes = () => (
	<BrowserRouter>
		<Switch>
  		<Route exact path="/" component={Home} />
  		<Route path="/dashboard" component={Dashboard} />
  		<Route path="/tasks" component={Tasks} />
  		<Route path="/signin" component={SignIn} />
  		<Route path="/app" component={App} />
  	</Switch>
  </BrowserRouter>
)

export default Routes;