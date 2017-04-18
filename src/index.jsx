import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import reducer from './reducers';
import Routes from './config/routes';

injectTapEventPlugin();

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
    this.state = { rehydrated: false };
  }

  componentWillMount() {
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true });
    });
  }

  render() {
    if (this.state.rehydrated) {
      return (
        <Provider store={store}>
          <Routes />
        </Provider>
      );
    }
    return (
      <MuiThemeProvider>
        <div style={{ position: 'relative' }}>
          <RefreshIndicator
            size={200}
            left={-100}
            top={200}
            loadingColor="#26c6da"
            status="loading"
            style={{ marginLeft: '50%' }}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}
render(<AppProvider />, document.getElementById('app-wrapper'));
