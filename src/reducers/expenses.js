import { ADD_EXPENSE } from './actions/expenses/expenses.js';

export default function expensesReducer(state = {}, action) {
  switch (action.type) {
    case ADD_EXPENSE: {
      return {
        ...state,
        action.payload
      };
    default: 
      return state;
    }
  }
}