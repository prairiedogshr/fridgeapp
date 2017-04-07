import { GET_HOUSE_REQUEST, RECEIVE_HOUSE } from '../actions/actionTypes';

export default function authReducer(state={}, action) {
  switch (action.type) {
    case GET_HOUSE_REQUEST:  
      return {
        ...state,
          loading: true
        };
    case RECEIVE_HOUSE: {
      return {
        ...state,
        ...action.payload,
        loading: false
      }
    }
    default: 
      return state
  }
}