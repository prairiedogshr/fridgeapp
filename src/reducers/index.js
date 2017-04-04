import { combineReducers } from 'redux';

// import different reducers here
import homelessReducer from './test';
import choresReducer from './chores';
import houseReducer from './house.js';
import tasksReducer from './tasks';

const rootReducer = combineReducers({
  homelessReducer,
  choresReducer,
  houseReducer
  tasksReducer,
});

export default rootReducer;
