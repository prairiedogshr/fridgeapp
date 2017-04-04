import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
// import different reducers here
import homelessReducer from './test';
import choresReducer from './chores';
import houseReducer from './house.js';
import userReducer from './user.js';
import authReducer from './auth.js';
import tasksReducer from './tasks';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  homelessReducer,
  choresReducer,
  tasksReducer,
  settingsReducer,
  houseReducer,
  userReducer,
  authReducer
});

export default rootReducer;
