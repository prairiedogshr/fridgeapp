import axios from 'axios';
import { EDIT_PROFILE } from '../actionTypes';

export const updateUser = (profile) => {
  return (dispatch) => {
    return axios.put('/api/users/', profile)
      .then((res) => {
        return dispatch({
          type: EDIT_PROFILE,
          payload: profile,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

<<<<<<< HEAD
export const changePassword = (old, new1, new2) =>{
  return(dispatch) => {
    return axios.put('api/users/change', old, new1, new2)
=======
export const changePassword = (user) => {
  return (dispatch) => {
    return axios.put('/api/users/change', user)
>>>>>>> got change password to work
      .then((res) =>{
        return dispatch({
          type: EDIT_PROFILE,
          payload: res,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
