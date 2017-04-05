// add verb into actionTypes.js and then import here

import { CHECK_HOME,
  ADD_CHORE,
  COMPLETE_CHORE,
  UNDO_COMPLETE,
  ADD_TASK,
  COMPLETE_TASK,
  UNDO_COMPLETE_TASK,
  EDIT_PROFILE,
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  PROTECTED_TEST,
  ADD_USER,
  REMOVE_USER,
  UPDATE_HOUSE_INFO,} from './actionTypes';
  
import axios from 'axios';
import cookie from 'cookie';
import {browserhistory} from 'react-router';

const API_URL = 'http://localhost:8080/api'

// example action
export const isHomeless = (user) => {
  console.log('ACTION - checking if homeless');
  return {
    type: CHECK_HOME,
    payload: {
      check: `${user} is homeless`,
    },
  };
};

// Chore actions
export const addChore = (choreText) => {
  console.log('ACTION - adding chore: ', choreText);
  return {
    type: ADD_CHORE,
    payload: choreText,
  };
};

export const completeChore = (choreId) => {
  console.log(`ACTION - completing chore: ${choreId}`);
  return {
    type: COMPLETE_CHORE,
    payload: choreId,
  };
};

export const undoComplete = (choreId) => {
  console.log(`ACTION - undo complete: ${choreId}`);
  return {
    type: UNDO_COMPLETE,
    payload: choreId,
  };
};

export const updateHouseInfo = updateInfo => ({
  type: UPDATE_HOUSE_INFO,
  payload: {
    item: updateInfo.item,
    value: updateInfo.value,
  },
});

export const addUser = user => ({
  type: ADD_USER,
  payload: user,
});


export const removeUser = (user) => {
  return {
    type: REMOVE_USER,
    payload: user
  }
}

// Task actions
export const addTask = (taskText) => {
  console.log('ACTION - adding chore: ', taskText);
  return {
    type: ADD_TASK,
    payload: taskText,
  };
};

export const completeTask = (taskId) => {
  console.log(`ACTION - completing chore: ${taskId}`);
  return {
    type: COMPLETE_TASK,
    payload: taskId,
  };
};

export const undoCompleteTask = (taskId) => {
  console.log(`ACTION - undo complete: ${taskId}`);
  return {
    type: UNDO_COMPLETE_TASK,
    payload: taskId,
  };
};


export const updateProfile = (field, data) => {
  console.log(field, data);
  return {
    type: EDIT_PROFILE,
    payload: {
      field,
      data,

    }
  }
};


//login actions

export const errorHandler = (dispatch, error, type) => {
  let errorMessage = '';
  if(error.data.error) {
    errorMessage = error.data.error;
  } else if(error.data){
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if(error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}

export const loginUser = ({ email, password })  => {
  return (dispatch) => {
    axios.post(`${API_URL}/auth/login`, { email, password })
    .then(response => {
      cookie.save('token', response.data.token, { path: '/' });
      dispatch({ type: AUTH_USER });
      window.location.href = CLIENT_ROOT_URL + '/dashboard';
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
    }
  }

export const logoutUser=()=>{
  return (dispatch) => {
    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });
    window.location.href = CLIENT_ROOT_URL + '/login';
  }
}


  export const registerUser = ({ email, first, last, username, password }) => {
    return (dispatch) => {
      axios.post(`${API_URL}/auth/register`, { email, first, last,username, password })
      .then(response => {
        cookie.save('token', response.data.token, { path: '/' });
        dispatch({ type: AUTH_USER });
        window.location.href = CLIENT_ROOT_URL + '/dashboard';
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR)
      });
    }
  }

export const protectedTest = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/protected`, {
      headers: { 'Authorization': cookie.load('token') }
    })
    .then(response => {
      dispatch({
        type: PROTECTED_TEST,
        payload: response.data.content
      });
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, AUTH_ERROR)
    });
  }
}