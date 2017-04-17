import { ADD_EXPENSE } from '../actions/actionTypes';

export default function expensesReducer(state = {}, action) {
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
