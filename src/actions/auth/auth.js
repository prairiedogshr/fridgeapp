import axios from 'axios';
import cookie from 'react-cookie';

import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  PROTECTED_TEST,
  INIT_USER,
  LOG_OUT,
} from '../actionTypes'

const API_URL = 'http://localhost:1337/api';
const CLIENT_ROOT_URL = 'http://localhost:1337';

// Login actions
export const logoutUser = () => (dispatch) => {
  dispatch({ type: UNAUTH_USER });
  cookie.remove('token', { path: '/' });
};

export const errorHandler = (dispatch, error, type) => {
  let errorMessage = '';
  if (error.data.error) {
    errorMessage = error.data.error;
  } else if (error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if (error.status === 401) {
    dispatch({
      type,
      payload: 'You are not authorized to do this. Please login and try again.',
    });
    logoutUser();
  } else {
    dispatch({
      type,
      payload: errorMessage,
    });
  }
};

export const loginUser = creds => dispatch =>
axios.post('/api/users/signin', creds).then((response) => {
        if (response) {
          console.log('Good work!!! ', response);
          dispatch({
            type: INIT_USER,
            payload: response.data.id,
          });
          // check if user has a house
          return axios.get(`/api/users/${response.data.id}`)
            .then(user => user.data.house_in_user);
        }
        return false;
      })
      .catch((error) => {
        // user not found in system
        console.log('no user: ', error);
        return 'no user';
        // errorHandler(dispatch, error.response, AUTH_ERROR);
      });

export const registerUser = creds => (dispatch) => {
  return axios.post('/api/users/', creds)
      .then((response) => {
        cookie.save('token', response.data.token, { path: '/' });
        dispatch({ type: AUTH_USER });
        // window.location.href = '#/profile';
        // history.push('/dashboard');
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
};

// export const protectedTest = () => (dispatch) => {
//   axios.get(`${API_URL}/protected`, {
//     headers: { Authorization: cookie.load('token') },
//   })
//       .then((response) => {
//         dispatch({
//           type: PROTECTED_TEST,
//           payload: response.data.content,
//         });
//       })
//       .catch((error) => {
//         errorHandler(dispatch, error.response, AUTH_ERROR);
//       });
// };
