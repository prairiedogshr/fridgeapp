// don't forget to add action dispatches here
import { ADD_CHORE, COMPLETE_CHORE, UNDO_COMPLETE, INCREASE_GROUPS, DECREASE_GROUPS, ASSIGN_GROUP } from '../actions/actionTypes';

const initialState = {
  complete: [{ id: 1, value: 'chore 1' }, { id: 2, value: 'chore 2' }, { id: 3, value: 'chore 3' }],
  incomplete: [{ id: 4, value: 'chore 4' }],
  groups: [1],
};

let idCount = 5;
let last;

export default function choresReducer(state = initialState, action) {
  console.log('action type outer: ', action.type);
  let item;

  switch (action.type) {
    case ADD_CHORE: {
      console.log('action payload inner: ', action.payload);
      return {
        ...state,
        incomplete: [...state.incomplete, { id: idCount++, value: action.payload }],
      };
    }
    case COMPLETE_CHORE: {
      console.log('action payload inner: ', action.payload);
      const incomplete = state.incomplete.filter((val) => {
        if (val.id === action.payload) {
          item = val;
          return false;
        }
        return true;
      });
      return {
        ...state,
        incomplete,
        complete: [
          ...state.complete, { id: action.payload, value: item.value, group: item.group || null },
        ],
      };
    }

    case UNDO_COMPLETE: {
      console.log('action payload inner: ', action.payload);
      const complete = state.complete.filter((val) => {
        if (val.id === action.payload) {
          item = val;
          return false;
        }
        return true;
      });
      return {
        ...state,
        complete,
        incomplete: [
          ...state.incomplete, { id: action.payload, value: item.value, group: item.group || null },
        ],
      };
    }

    case INCREASE_GROUPS:
      last = state.groups.length - 1;
      if (state.groups[last] < 7) {
        return {
          ...state,
          groups: [...state.groups, state.groups[last] + 1],
        };
      }
      return state;

    case DECREASE_GROUPS:
      last = state.groups.length - 1;
      if (state.groups[last] > 1) {
        return {
          ...state,
          groups: state.groups.slice(0, last),
        };
      }
      return state;

    case ASSIGN_GROUP:
      const index = state.incomplete.findIndex(val => val.id === action.payload.choreId);
      const newItem = Object.assign({}, state.incomplete[index], { group: action.payload.group });
      return {
        ...state,
        incomplete: [
          ...state.incomplete.slice(0, index),
          newItem,
          ...state.incomplete.slice(index + 1, state.incomplete.length),
        ],
      };

    default:
      console.log('default');
      return state;
  }
}
