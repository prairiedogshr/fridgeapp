import { HYDRATE } from '../actionTypes.js';
import axios from 'axios';

export const getAppState = () => {
  return (dispatch, getState) => {
    const user = getState().initReducer.user_id
    return axios.get(`/api/users/appstate/${1}`)
    .then(resp => {
      dispatch({
        type: HYDRATE,
        payload: {
          ...resp.data
        }
      })
    })
    .then(() => {
      return true
    })
  }
};
