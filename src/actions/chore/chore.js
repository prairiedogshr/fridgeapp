import {
  ADD_CHORE,
  COMPLETE_CHORE,
  UNDO_COMPLETE,
  INCREASE_GROUPS,
  DECREASE_GROUPS,
  ASSIGN_GROUP,
} from '../actionTypes';

import axios from 'axios';

// export const addChore = (choreText) => {
//   console.log('ACTION - adding chore: ', choreText);
//   return {
//     type: ADD_CHORE,
//     payload: choreText,
//   };
// };

export const addChore = (chore) => {
  console.log('chore+++++', chore);
  return (dispatch) => {
    return axios.post('/api/chores', chore)
    .then(choreText => {
      console.log('choreText+++++', choreText);
      console.log('chore.chore_name+++++', chore.chore_name);
      return dispatch({
        type: ADD_CHORE,
        payload: chore.chore_name,
      });
    }); // catch?
  }
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
  console.log(`ACTION - assignGroups: choreId:${choreId} group:${group}`);

  return (dispatch) => {
    return axios.put('/api/chores',
      {
        "id": choreId,
        "key": "chore_group",
        "value": group,
      }
    )
      .then(result => {
        return dispatch({
          type: ASSIGN_GROUP,
          payload: { choreId, group },
        });
      });
  };
};
