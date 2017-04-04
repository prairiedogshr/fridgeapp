import { combineReducers } from 'redux';

// import different reducers here
import homelessReducer from './test';
import choresReducer from './chores';
import tasksReducer from './tasks';

const rootReducer = combineReducers({
  homelessReducer,
  choresReducer,
  tasksReducer,
});

export default rootReducer;
