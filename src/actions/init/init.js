import { HYDRATE } from '../actionTypes.js';
import axios from 'axios';

export const getAppState = () => {
  return (dispatch, getState) => {
    const user = getState()
    const id = 1;
    console.log('~~~~~~~~~~ ', user);
    axios.get(`/api/users/appstate/${id}`)
    .then(resp => {
      console.log('response! ', resp.data);
      dispatch({
        type: HYDRATE,
        payload: {
          ...resp.data
        }
      })
      console.log('=========== ', user)
    })
  }
}
