import axios from 'axios';
import cookie from 'cookie';
import { browserhistory } from 'react-router';
import { withRouter } from 'react-router-dom';

import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  PROTECTED_TEST
} from '../actionTypes'

const API_URL = 'http://localhost:1337/api';
const CLIENT_ROOT_URL = 'http://localhost:1337';

// Login actions
export const logoutUser = () => {
  return (dispatch) => {
    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });
    window.location.href = CLIENT_ROOT_URL + '/#/login';
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
  console.log("hey youre here with: ",  e)
  return (dispatch) => {
    axios.post(`${API_URL}/users/signin`, e)
      .then((response) => {
        console.log("Good work!!! ", response)
        window.location.href = CLIENT_ROOT_URL + '/#/dashboard';
        
        })

      .catch((error) => {
        console.log("We goofed", error)
        errorHandler(dispatch, error.response, AUTH_ERROR);
      });
  };
};

export const registerUser = (e) => {
  console.log(e)
  return (dispatch) => {
    axios.post(`${API_URL}/auth/register`, e)
      .then((response) => {
        cookie.save('token', response.data.token, { path: '/' });
        dispatch({ type: AUTH_USER });
        window.location.href = CLIENT_ROOT_URL + '/dashboard';
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR);
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
