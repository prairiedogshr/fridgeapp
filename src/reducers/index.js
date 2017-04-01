import { combineReducers } from 'redux';
// import different reducers here
import homelessReducer from './test.js';
import choresReducer from './chores.js';

const rootReducer = combineReducers({
  homelessReducer,
  choresReducer
});

export default rootReducer;

// export default dummyFunc = (a,b) => {
//   return a+b;
// }