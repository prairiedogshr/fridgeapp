import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import Routes from './config/routes.jsx';
import reducer from './reducers';

const history = createHistory();

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
