import { combineReducers } from 'redux';

// import different reducers here
import homelessReducer from './test';
import choresReducer from './chores';

const rootReducer = combineReducers({
  homelessReducer,
  choresReducer,
});

export default rootReducer;
