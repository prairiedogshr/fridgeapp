import {
  ADD_CHORE,
  COMPLETE_CHORE,
  UNDO_COMPLETE,
  INCREASE_GROUPS,
  DECREASE_GROUPS,
  ASSIGN_GROUP,
  ROTATE_GROUPS,
} from '../actionTypes';

import axios from 'axios';

// export const addChore = (choreText) => {
//
//   return {
//     type: ADD_CHORE,
//     payload: choreText,
//   };
// };

export const addChore = (chore) => {
  return (dispatch) => {
    return axios.post('/api/chores', chore)
    .then(choreText => {
      return dispatch({
        type: ADD_CHORE,
        payload: chore.chore_name,
      });
    }); // catch?
  };
};

// export const completeChore = (choreId) => {
//
//   return {
//     type: COMPLETE_CHORE,
//     payload: choreId,
//   };
// };

// export const undoComplete = (choreId) => {
//
//   return {
//     type: UNDO_COMPLETE,
//     payload: choreId,
//   };
// };

export const completeChore = (choreId) => {
  return (dispatch) => {
    return axios.put('api/chores',
      {
        "id": choreId,
        "key": "chore_is_done",
        "value": 1
      }
    )
      .then(result => {
        return dispatch({
          type: COMPLETE_CHORE,
          payload: choreId,
        });
      });
  }
}

export const undoComplete = (choreId) => {
  return (dispatch) => {
    return axios.put('api/chores',
      {
        "id": choreId,
        "key": "chore_is_done",
        "value": 0
      }
    )
      .then(result => {
        return dispatch({
          type: UNDO_COMPLETE,
          payload: choreId,
        });
      });
  }
}

export const increaseGroups = (roomies) => {
  return {
    type: INCREASE_GROUPS,
    payload: roomies.length,
  };
};

export const decreaseGroups = (roomies) => {
  return {
    type: DECREASE_GROUPS,
    payload: roomies.length,
  };
};

export const assignGroup = (choreId, group) => {
  return (dispatch) => {
    return axios.put('/api/chores',
      {
        "id": choreId,
        "key": "chore_group",
        "value": group,
      }
    );
  };
};

export const rotateGroups = (roomies) => {
  let max = roomies.length;
  let allAssigned = roomies.every(roomie => {
    return roomie.user_chore_rotation;
  });

  return (dispatch) => {
    roomies.forEach((roomie, ind) => {
      let newRotation;
      if (allAssigned) {
        newRotation = roomie.user_chore_rotation + 1;
        if (newRotation > max) {
          newRotation = 1;
        }
      } else {
        newRotation = ind + 1;
      }

      return axios.put('/api/users',
        {
          "id": roomie.user_id,
          "key": "user_chore_rotation",
          "value": newRotation,
        }
      )
      .then(result => {
        return dispatch({
          type: ROTATE_GROUPS,
          payload: { roomie, newRotation },
        });
      });
    });
  };


  // // iterate through roommates


  // let groupsTaken = {};

  // let notAssignedRoomies = [];
  // let assignedRoomies = roomies.filter(roomie => {
  //   if (roomie.user_chore_rotation) {
  //     return true;
  //   }
  //   notAssignedRoomies.push(roomie);
  //   return false;
  // });

  // promiseFunc = new Promise((resolve, reject) => {
  //   assignedRoomies.forEach((roomie, ind) => {
  //     let newRotation = roomie.user_chore_rotation + 1
  //     groupsTaken[newRotation] = null;
  //     return (dispatch) => {
  //       return axios.put('/api/users',
  //         {
  //           "id": roomie.user_id,
  //           "key": "user_chore_rotation",
  //           "value": newRotation,
  //         }
  //       )
  //       .then(result => {
  //         return dispatch({
  //           type: ROTATE_GROUPS,
  //           payload: {roomie, newRotation},
  //         });
  //       });
  //     }
  //   });
  // });

  // promiseFunc.then(() => {

  // })




  // for each user in the house
    // find which chore group they are assigned to


  // Grab houseId from redux store
  // Find highest group number in house's chores
  // increment each chore's group by 1 if not at max
    // else reset back to group 1

  // would be easire to assign roomies to a group number to have that cycle through.

};
