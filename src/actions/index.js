// add verb into actionTypes.js and then import here
import {
  CHECK_HOME,
  ADD_CHORE,
  COMPLETE_CHORE,
  UNDO_COMPLETE,
  ADD_TASK,
  COMPLETE_TASK,
  UNDO_COMPLETE_TASK,
  EDIT_PROFILE,
  ADD_USER,
  REMOVE_USER,
  UPDATE_HOUSE_INFO,
} from './actionTypes';

// example action
export const isHomeless = (user) => {
  console.log('ACTION - checking if homeless');
  return {
    type: CHECK_HOME,
    payload: {
      check: `${user} is homeless`,
    },
  };
};

// Chore actions
export const addChore = (choreText) => {
  console.log('ACTION - adding chore: ', choreText);
  return {
    type: ADD_CHORE,
    payload: choreText,
  };
};

export const completeChore = (choreId) => {
  console.log(`ACTION - completing chore: ${choreId}`);
  return {
    type: COMPLETE_CHORE,
    payload: choreId,
  };
};

export const undoComplete = (choreId) => {
  console.log(`ACTION - undo complete: ${choreId}`);
  return {
    type: UNDO_COMPLETE,
    payload: choreId,
  };
};

export const updateHouseInfo = updateInfo => ({
  type: UPDATE_HOUSE_INFO,
  payload: {
    item: updateInfo.item,
    value: updateInfo.value,
  },
});

export const addUser = user => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = user => ({
  type: REMOVE_USER,
  payload: user,
});
// Task actions
export const addTask = (taskText) => {
  console.log('ACTION - adding chore: ', taskText);
  return {
    type: ADD_TASK,
    payload: taskText,
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


export const updateProfile = (field, data) => {
  console.log(field, data);
  return {
    type: EDIT_PROFILE,
    payload: {
      field,
      data,
    },
  };
};
