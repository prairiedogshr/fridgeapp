import axios from 'axios';
import { EDIT_PROFILE, CHANGE_PASS} from '../actionTypes';

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

export const changePassword = (user) => {
  return (dispatch) => {
    return axios.put('/api/users/change', user)
      .then((res) =>{
        return dispatch({
          type: CHANGE_PASS,
          payload: res,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
