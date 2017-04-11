import { INIT_USER } from '../actions/actionTypes';

export default function initReducer(state={}, action) {
  switch (action.type) {
    case INIT_USER: {
      return {
        ...state,
        user_id: action.payload
      }
    }
    default: 
      return state
  }
}