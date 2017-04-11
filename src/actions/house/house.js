import{
  ADD_USER,
  REMOVE_USER,
  UPDATE_HOUSE_INFO,
  RECEIVE_HOUSE,
  CREATE_HOUSE,
  JOIN_HOUSE,
} from '../actionTypes'
import axios from 'axios';

export const updateHouseInfo = (updateInfo) => {
  return (dispatch, getState) => {
    console.log('getting state ', getState())
    return axios.put('/api/houses/', {
      id: 1,
      key: updateInfo.key,
      value: updateInfo.value
    })
    .then(resp => {
      dispatch({
        type: UPDATE_HOUSE_INFO,
        payload: {
          item: updateInfo.item,
          value: updateInfo.value,
        }
      })
    })
  }
}

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = (user) => {
  return {
    type: REMOVE_USER,
    payload: user,
  };
};

export const getHouse = (id) => {
  return (dispatch, getState) => {
  //  console.log('does this work? ', getState())
    return axios.get(`/api/houses/${id}`)
    .then(resp => {
      console.log('house!! ', resp)
      return dispatch({
        type: RECEIVE_HOUSE,
        payload: resp.data
      })
    });
  }
};

export const createHouse = (house) => {
  console.log("In the action", house)
  return {
    type: CREATE_HOUSE,
    payload: house,
  };
};

export const joinHouse = (house) => {
  console.log("Inside the joinHouse action", house)
  return {
    type: JOIN_HOUSE,
    payload: house,
  };
};
