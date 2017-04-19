import { JOIN_HOUSE, UNAUTH_USER } from '../actions/actionTypes';

export default function joinHouseReducer(state = {}, action) {

  switch (action.type) {
    case UNAUTH_USER:
      return { ...{} };
    case JOIN_HOUSE:
      const update = {};
      update[action.payload.key] = action.payload.value;
      return {
        ...state,
        ...update,
      };
    default:
      return state;
  }
}
