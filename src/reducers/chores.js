// don't forget to add action dispatches here
import { CHECK_HOME, ADD_CHORE, COMPLETE_CHORE, UNDO_COMPLETE } from '../actions/actionTypes.js';

const initialState = {complete: [{id: 1, value: "chore 1"}, {id: 2, value: "chore 2"}, {id: 3, value: "chore 3"}], incomplete: [{id: 4, value: "chore 4"}]};

let idCount = 5;

export default function choresReducer(state = initialState, action) {
  console.log('action type outer: ', action.type);
  let value;

  switch (action.type) {
    case ADD_CHORE:
      console.log('action payload inner: ', action.payload);
      return {...state, incomplete: [...state.incomplete, {id: idCount++, value: action.payload}]};

    case COMPLETE_CHORE:
      console.log('action payload inner: ', action.payload);
      const complete = state.complete.filter( val => {
        if (val.id === action.payload) {
          value = val.value;
          return false;
        }
        return true;
      });
      return {...state, complete: complete, incomplete: [...state.incomplete, {id: action.payload, value}]};

    case UNDO_COMPLETE:
      console.log('action payload inner: ', action.payload);
      const incomplete = state.incomplete.filter( val => {
        if (val.id === action.payload) {
          value = val.value;
          return false;
        }
        return true;
      });
      return {...state, incomplete: incomplete, complete: [...state.complete, {id: action.payload, value}]};

    default:
      console.log('default');
      return state;
  }
}
