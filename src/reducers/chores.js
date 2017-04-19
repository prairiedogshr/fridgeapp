// don't forget to add action dispatches here
import { ADD_CHORE, COMPLETE_CHORE, UNDO_COMPLETE, INCREASE_GROUPS, DECREASE_GROUPS, ASSIGN_GROUP, UNAUTH_USER } from '../actions/actionTypes';

const initialState = {
  houseChores: [{ chore_id: 1, chore_name: 'chore 1' }, { id: 2, chore_name: 'chore 2' }, { id: 3, chore_name: 'chore 3' },
    { id: 4, chore_name: 'chore 4' },
  ],
  complete: [{ chore_id: 1, chore_name: 'chore 1' }, { id: 2, chore_name: 'chore 2' }, { id: 3, chore_name: 'chore 3' }],
  incomplete: [{ id: 4, chore_name: 'chore 4' }],
  groups: [1],
};

// let idCount = 5;
let last;
export default function choresReducer(state = initialState, action) {
  let item;

  switch (action.type) {
    case UNAUTH_USER:
      return { ...{} };
    case ADD_CHORE: {
      return {
        ...state,
        incomplete: [...state.incomplete, { chore_id: Date.now(), chore_name: action.payload }],
        houseChores: [...state.houseChores, { chore_id: Date.now(), chore_name: action.payload }],
      };
    }
    case COMPLETE_CHORE: {
      const incomplete = state.incomplete.filter((val) => {
        if (val.chore_id === action.payload) {
          item = val;
          return false;
        }
        return true;
      });

      return {
        ...state,
        incomplete,
        complete: [
          ...state.complete, { chore_id: action.payload, chore_name: item.chore_name, chore_group: item.chore_group || null },
        ],
      };
    }

    case UNDO_COMPLETE: {
      const complete = state.complete.filter((val) => {
        if (val.chore_id === action.payload) {
          item = val;
          return false;
        }
        return true;
      });
      return {
        ...state,
        complete,
        incomplete: [
          ...state.incomplete, { chore_id: action.payload, chore_name: item.chore_name, chore_group: item.chore_group || null },
        ],
      };
    }

    case INCREASE_GROUPS:
      // payload: roomies.length
      last = state.groups.length - 1;
      if (state.groups[last] < action.payload) {
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
      // payload: { choreId, group }
      const completeIndex = state.complete.findIndex(val => val.chore_id === action.payload.choreId);
      const incompleteIndex = state.incomplete.findIndex(val => val.chore_id === action.payload.choreId);

      const houseChores = state.houseChores.map(item => {
        if (item.chore_id === action.payload.choreId) {
          return Object.assign({}, item, { chore_group: action.payload.group })
        }
        return item;
      });

      let index;
      let field;
      if (completeIndex !== -1) {
        index = completeIndex;
        field = 'complete';
      } else {
        index = incompleteIndex;
        field = 'incomplete';
      }
      const newItem = Object.assign({}, state[field][index], { chore_group: action.payload.group });
      return {
        ...state,
        [field]: [
          ...state[field].slice(0, index),
          newItem,
          ...state[field].slice(index + 1, state[field].length),
        ],
        houseChores,
      };

    default:
      return state;
  }
}
