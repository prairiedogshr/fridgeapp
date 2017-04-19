// don't forget to add action dispatches here
import { ADD_TASK, COMPLETE_TASK, UNDO_COMPLETE_TASK, UNAUTH_USER } from '../actions/actionTypes';

const initialState = { complete: [{ id: 1, value: 'task 1' }, { id: 2, value: 'task 2' }, { id: 3, value: 'task 3' }], incomplete: [{ id: 4, value: 'task 4' }] };

export default function tasksReducer(state = initialState, action) {
  let value;
  switch (action.type) {
    case UNAUTH_USER:
      return { ...{} };

    case ADD_TASK:
      return {
        ...state,
        incomplete: [...state.incomplete,
        {
          house_in_task: action.payload.house_in_task,
          task_name: action.payload.task_name
        }]
      };

    // case COMPLETE_TASK:
      // const complete = state.complete.filter((val) => {
      //   if (val.id === action.payload) {
      //     value = val.value;
      //     return false;
      //   }
      //   return true;
      // });
      //  return {
      //    ...state,
      //    complete: [...state.complete, ...action.payload],
        //  incomplete: [...state.incomplete, ...action.payload],
      //  };
      // })

      case COMPLETE_TASK: {
        const incomplete = state.incomplete.filter((val) => {
          if (val.task_id === action.payload.task_id) {
            value = val;
            return false;
          }
          return true;
        });

        return {
          ...state,
          incomplete,
          complete: [
            ...state.complete, {
              task_id: action.payload.task_id,
              task_name: value.task_name,
              house_in_task: value.house_in_task,
              claimed_by_user_in_task: value.claimed_by_user_in_task,
              task_is_done: value.task_is_done,
              expense_in_task: value.expense_in_task,
              created_at: value.created_at,
              updated_at: value.updated_at },
          ],
        };
      }

    case UNDO_COMPLETE_TASK: {
      const complete = state.complete.filter((val) => {
        if (val.task_id === action.payload.task_id) {
          value = val;
          return false;
        }
        return true;
      });
      return {
        ...state,
        complete,
        incomplete: [
          ...state.incomplete, {
            task_id: action.payload.task_id,
            task_name: action.payload.task_name,
            house_in_task: action.payload.house_in_task,
            claimed_by_user_in_task: action.payload.claimed_by_user_in_task,
            task_is_done: action.payload.task_is_done,
            expense_in_task: action.payload.expense_in_task,
            created_at: action.payload.created_at,
            updated_at: action.payload.updated_at },
        ],
      };
    }

    default:
      return state;
  }
}
