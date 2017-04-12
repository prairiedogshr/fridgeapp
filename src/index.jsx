import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router } from 'react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import Routes from './routes';
import reducer from './reducers';
import { persistStore, autoRehydrate } from 'redux-persist'


const history = createHistory();
const middleware = applyMiddleware(thunk);

const mainReducer = (state = {}, action) => {
  return action.type === 'HYDRATE' ? {
    ...state,
    ...action.payload,
  } : reducer(state, action);
};

const store = createStore(
  mainReducer,
  compose(middleware,
  autoRehydrate(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
persistStore(store);

export default class AppProvider extends Component {
  constructor() {
    super();
    this.state = { rehydrated: false }
  }

  componentWillMount() {
    console.log('hello? ');
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if (this.state.rehydrated) {
      return (
        <Provider store={store}>
          <Router history={history} routes={Routes} />
        </Provider>
      )
    } else {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      )
    }
  }
}
render(<AppProvider />, document.getElementById('root'));
