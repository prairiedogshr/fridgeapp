import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
// import different reducers here
import homelessReducer from './test.js';
import choresReducer from './chores.js';

const rootReducer = combineReducers({
  homelessReducer,
  choresReducer
});

export default rootReducer;
