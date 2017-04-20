import {
  ADD_USER,
  REMOVE_USER,
  UPDATE_HOUSE_INFO,
  RECEIVE_HOUSE,
  CREATE_HOUSE,
  JOIN_HOUSE,
} from '../actionTypes'
import axios from 'axios';
import { isEmpty } from 'underscore'
import { HYDRATE } from '../actionTypes.js';

export const updateHouseInfo = (updateInfo) => {
  return (dispatch, getState) => {
    const currHouseState = getState().houseReducer;
    const currHouse = {
      id: currHouseState.house_id,
      admin_user_in_house: currHouseState.admin_user_in_house,
      house_address: currHouseState.house_address,
      house_unit_number: currHouseState.house_unit_number,
      house_city: currHouseState.house_city,
      house_state: currHouseState.house_state,
      house_zip: currHouseState.house_zip,
      house_account: currHouseState.house_account,
      house_info: currHouseState.house_info,
    };
    return axios.put('/api/houses/', {
      ...currHouse,
      ...updateInfo,
    })
      .then((resp) => {
        dispatch({
          type: UPDATE_HOUSE_INFO,
          payload: {
            ...updateInfo,
          },
        });
      });
  };
};

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = (user) => {
  return (dispatch, getState) => {
    return axios.post('/api/users/remove', {
      id: user,
    })
    .then((resp) => {
      return dispatch({
        type: REMOVE_USER,
        payload: user,
      });
    }).catch((err) => {
      console.log('err! ', err);
    });
  };
};

export const getHouse = (id) => {
  return (dispatch, getState) => {
    return axios.get(`/api/houses/${id}`)
      .then((resp) => {
        return dispatch({
          type: RECEIVE_HOUSE,
          payload: resp.data,
        });
      });
  };
};

export const createHouse = (house) => {
  return (dispatch, getState) => {
    console.log('state? ', getState())
    const user_id = getState().initReducer.user_id;
    const user_email = getState().initReducer.user_email;

    return axios.post('/api/houses/', {
      admin_user_in_house: user_id,
      house_address: house.address,
      house_unit_number: house.unit,
      house_city: house.city,
      house_state: house.state,
      house_zip: house.zip,
      house_info: house.info,
      house_account: user_email,
    }).then((data) => {
      console.log('house data: ', data)
      return axios.put('/api/users/joinhouse', {
        key: 'house_in_user',
        value: data.data.house,
        id: user_id,
      })
      .then(() => {
        return axios.put('/api/users/joinhouse', {
          key: 'user_is_admin',
          value: 1,
          id: user_id,
        })
      })
    }).catch((err) => false)
  }
};

export const houseExist = (number) => {
  axios.get(`api/houses/${number}`).then((data) => {
    if (data.data.house_account === null || data.data.house_account === undefined) {
      return false;
    }
    return true;
  });
};

export const joinHouse = (house, user) => {
  return (dispatch, getState) => {
    const id = getState().initReducer.user_id || getState().initReducer.id;
    return axios.put('/api/users/joinhouse', {
      key: 'house_in_user',
      value: house,
      id,
    }).then((resp) => {
      dispatch({
        type: HYDRATE,
        payload: {
          ...resp.data,
        },
      })
    })
    .then(() => {
      return true;
    });
  };
};


// return(dispatch,getState) =>{
//   const id = getState().initReducer.user_id
//   return axios.put('/api/users', {
//     key: 'house_in_user',
//     value: house,
//     id,
//   })
//   .then((res)=>{
// }).then(()=>{
//   return true
// })
// }


// axios.get('api/houses/'+house).then((data) =>{
//   if (data.data.house_account === null || data.data.house_account === undefined ){
//     alert("Invalid Code!")
//   }else{
//
//     // axios.get('api/users/3').then((user) =>{
//     //   const q = user.data
//     // })
//
//   };
// })
// return {
//   type: JOIN_HOUSE,
//   payload: user
// };
