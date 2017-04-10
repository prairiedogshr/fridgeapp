import axios from 'axios';
import cookie from 'react-cookie';
import { browserhistory } from 'react-router';

import{
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  PROTECTED_TEST
} from '../actionTypes'

// Login actions
export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });
    window.location.href = '/login';
  };
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

export const loginUser = (e) => {
  console.log(e)
  return (dispatch) => {
     axios.post(`/api/users/signin`, e)
      .then((response) => {
        cookie.save('token', response.data.token, { path: '/' });
        dispatch({ type: AUTH_USER });
        window.location.href = '#/profile';
      })
      .catch((error) => {
        console.log(error)
      });
  };
};

export const registerUser = (e) => {
  return (dispatch) => {
    axios.post(`/api/users/`, e)
      .then((response) => {
        cookie.save('token', response.data.token, { path: '/' });
        dispatch({ type: AUTH_USER });
        window.location.href = '#/profile';
      })
      .catch((error) => {
        console.log(error)
      });
  };
};

export const protectedTest = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/protected`, {
      headers: { Authorization: cookie.load('token') },
    })
      .then((response) => {
        dispatch({
          type: PROTECTED_TEST,
          payload: response.data.content,
        });
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR);
      });
  };
};
