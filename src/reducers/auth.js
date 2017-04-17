import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  PROTECTED_TEST,
  INIT_USER,
} from '../actions/actionTypes';

const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case INIT_USER:
      return INITIAL_STATE;
    case AUTH_USER:
      return { ...state, error: '', message: '', authenticated: true };
    case UNAUTH_USER:
      return { ...{} };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case PROTECTED_TEST:
      return { ...state, content: action.payload };
    default:
      return state;
  }
}

// import {AUTH_USER} from '../actions/actionTypes';
// case UNAUTH_USER:
//   return { ...{} };
