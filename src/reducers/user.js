import { EDIT_PROFILE, UNAUTH_USER, CHANGE_PASS } from '../actions/actionTypes';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    case UNAUTH_USER:
      return {
        ...{},
      };

    case CHANGE_PASS:
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state;
  }
}
