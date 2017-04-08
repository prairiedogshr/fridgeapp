import { ADD_TASK, COMPLETE_TASK, UNDO_COMPLETE_TASK } from '../actionTypes'

export const addTask = (taskText) => {
  console.log('ACTION - adding chore: ', taskText);
  return (dispatch, getState) => {
    const state = getState()
    return {
      type: ADD_TASK,
      payload: taskText,
    };
  };
};

export const completeTask = (taskId) => {
  console.log(`ACTION - completing chore: ${taskId}`);
  return {
    type: COMPLETE_TASK,
    payload: taskId,
  };
};

export const undoCompleteTask = (taskId) => {
  console.log(`ACTION - undo complete: ${taskId}`);
  return {
    type: UNDO_COMPLETE_TASK,
    payload: taskId,
  };
};
