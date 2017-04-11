import { JOIN_HOUSE } from '../actions/actionTypes'



export default function joinHouseReducer(state={}, action){
  console.log('action type outer', action.type);

  switch(action.type){
    case JOIN_HOUSE:
      console.log("We are here I think", action.payload)
      return { ...state,
        [action.payload.field]: action.payload.data,
      };
    default:
      return state;
  }
}
