import { INIT_USER, UNAUTH_USER, HYDRATE } from '../actions/actionTypes';

export default function initReducer(state = {}, action) {
  switch (action.type) {
    case UNAUTH_USER:
      return { ...{} };
    case HYDRATE:
      return {
        ...state,
        user_id: action.payload,
        authenticated: true,
      };
    case INIT_USER: {
      console.log('@$%@%@#%@%@%@%@%@%@%@%@%', action.payload)
      return {
        ...state,
        ...action.payload,
        authenticated: true,
      };
    }
    default:
      return state;
  }
}
