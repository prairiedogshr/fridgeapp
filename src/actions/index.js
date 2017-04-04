// add verb into actionTypes.js and then import here
import { CHECK_HOME, ADD_CHORE, COMPLETE_CHORE, UNDO_COMPLETE } from './actionTypes';

// example action
export const isHomeless = (user) => {
  console.log('ACTION - checking if homeless');
  return {
    type: CHECK_HOME,
    payload: { check: `${user} is homeless` },
  };
};

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
