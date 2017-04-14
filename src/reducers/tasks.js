// don't forget to add action dispatches here
import { ADD_TASK, COMPLETE_TASK, UNDO_COMPLETE_TASK, UNAUTH_USER } from '../actions/actionTypes';

const initialState = { complete: [{ id: 1, value: 'task 1' }, { id: 2, value: 'task 2' }, { id: 3, value: 'task 3' }], incomplete: [{ id: 4, value: 'task 4' }] };

let idCount = 5;

export default function tasksReducer(state = initialState, action) {
  console.log('action type outer: ', action.type);
  let value;
  switch (action.type) {
    case UNAUTH_USER:
      return { ...{} };

    case ADD_TASK:
      console.log('action payload inner: ', action.payload);
      return {
        ...state,
        incomplete: [...state.incomplete, { id: idCount++, value: action.payload }],
      };

    case COMPLETE_TASK: {
      console.log('action payload inner: ', action.payload);
      const complete = state.complete.filter((val) => {
        if (val.id === action.payload) {
          value = val.value;
          return false;
        }
        return true;
      });
      return {
        ...state,
        complete,
        incomplete: [...state.incomplete, {id: action.payload, value}],
      };
    }

    case UNDO_COMPLETE_TASK: {
      console.log('action payload inner: ', action.payload);
      const incomplete = state.incomplete.filter((val) => {
        if (val.id === action.payload) {
          value = val.value;
          return false;
        }
        return true;
      });
      return {
        ...state,
        incomplete,
        complete: [...state.complete, { id: action.payload, value }],
      };
    }

    default:
      console.log('default');
      return state;
  }
}
