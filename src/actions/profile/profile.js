import axios from 'axios';
import { EDIT_PROFILE } from '../actionTypes';

export const submitProfile = (updateInfo) => {
  return (dispatch, getState) => {
    // const state = getState();
    return axios.put('/api/users/', {
      id: updateInfo.id,
      key: updateInfo.key,
      value: updateInfo.value,
    })
      .then((res) => {
        dispatch({
          type: EDIT_PROFILE,
          payload: {
            key: updateInfo.key,
            value: updateInfo.value,
          },
        });
      });
  };
};

export const submitProfile2 = (updateInfo) => {
  return (dispatch, getState) => {
    console.log('getting state ', getState())
    return axios.put('/api/houses/', {
      id: 1,
      key: updateInfo.key,
      value: updateInfo.value
    })
      .then(resp => {
        dispatch({
          type: UPDATE_HOUSE_INFO,
          payload: {
            key: updateInfo.key,
            value: updateInfo.value,
          }
        })
      })
  }
}