import { LOG_OUT } from '../actions/actionTypes';

export default function logoutReducer(state = {}, action) {

  switch (action.type) {
    case LOG_OUT:
      return {
        ...state,
      };
    default:
      return state;
  }
}
