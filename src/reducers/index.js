import { combineReducers } from 'redux';
// import different reducers here
import homelessReducer from './test.js'

const rootReducer = combineReducers({
  homelessReducer
});

export default rootReducer;

// export default dummyFunc = (a,b) => {
//   return a+b;
// }
