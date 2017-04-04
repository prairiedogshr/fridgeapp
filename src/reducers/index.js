import { combineReducers } from 'redux';

// import different reducers here
import homelessReducer from './test';
import choresReducer from './chores';
import houseReducer from './house.js';

const rootReducer = combineReducers({
  homelessReducer,
  choresReducer,
  houseReducer
});

export default rootReducer;
