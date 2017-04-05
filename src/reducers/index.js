import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

// import different reducers here
import homelessReducer from './test';
import choresReducer from './chores';
import houseReducer from './house';
import userReducer from './user';
import authReducer from './auth';
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
