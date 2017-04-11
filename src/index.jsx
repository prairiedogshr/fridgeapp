import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import Routes from './config/routes.jsx';
import reducer from './reducers';
import thunk from 'redux-thunk'



const history = createHistory();
const middleware = applyMiddleware(thunk);

const mainReducer = (state = {}, action) => {
  return action.type === 'HYDRATE' ? {
    ...state,
    ...action.payload
    } : reducer(state, action);
}


const store = createStore(
  mainReducer,
  compose(middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
