import { combineReducers } from 'redux';

// import different reducers here
import homelessReducer from './test';
import choresReducer from './chores';
import tasksReducer from './tasks';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  homelessReducer,
  choresReducer,
  tasksReducer,
  settingsReducer,
});

export default rootReducer;
