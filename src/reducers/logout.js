import { LOG_OUT } from '../actions/actionTypes';

export default function logoutReducer(state = {}, action) {
  console.log('()()()()()()()()()()()()()()()()())', action.type);

  switch (action.type) {
    case LOG_OUT:
      console.log("IN THE LOGOUT SWITCH", action.payload)
      return {
        ...state,
      };
    default:
      return state;
  }
}
