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

export const changePassword = (old, new1, new2) =>{
  return(dispatch) => {
    return axios.put('api/users/change', old, new1, new2)
      .then((res) =>{
        return dispatch({
          type: EDIT_PROFILE,
          payload: new1,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
