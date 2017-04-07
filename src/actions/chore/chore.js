import axios from 'axios';
import cookie from 'cookie';
import { browserhistory } from 'react-router';
import{
  ADD_CHORE,
  COMPLETE_CHORE,
  UNDO_COMPLETE,
  INCREASE_GROUPS,
  DECREASE_GROUPS,
  ASSIGN_GROUP
} from '../actionTypes'

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

export const increaseGroups = () => {
  console.log('ACTION - increaseGroups:');
  return {
    type: INCREASE_GROUPS,
    payload: null,
  };
};

export const decreaseGroups = () => {
  console.log('ACTION - decreaseGroups:');
  return {
    type: DECREASE_GROUPS,
    payload: null,
  };
};

export const assignGroup = (choreId, group) => {
  console.log('ACTION - assignGroups:');
  return {
    type: ASSIGN_GROUP,
    payload: { choreId, group },
  };
};
