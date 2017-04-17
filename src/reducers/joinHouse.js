import { JOIN_HOUSE, UNAUTH_USER } from '../actions/actionTypes';

export default function joinHouseReducer(state = {}, action) {
  console.log('action type outer', action.type);

  switch (action.type) {
    case UNAUTH_USER:
      return { ...{} };
    case JOIN_HOUSE:
      console.log('We are here I think', action.payload);
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
