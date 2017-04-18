import axios from 'axios';
import { EDIT_PROFILE } from '../actionTypes';

export const updateUser = (profile) => {
  console.log(profile);
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
