import { HYDRATE } from '../actionTypes.js';
import axios from 'axios';

export const getAppState = () => {
  return (dispatch, getState) => {
    const user = getState().initReducer.user_id
    console.log('~~~~~~~~~~ ', user);
    axios.get(`/api/users/appstate/${user}`)
    .then(resp => {
      console.log('response! ', resp.data);
      dispatch({
        type: HYDRATE,
        payload: {
          ...resp.data
        }
      })
    })
    .then(() => {
      console.log('=========== ', user)
      return true
    })
  }
};

