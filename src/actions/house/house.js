import{
  ADD_USER,
  REMOVE_USER,
  UPDATE_HOUSE_INFO,
  RECEIVE_HOUSE,
  CREATE_HOUSE,
  JOIN_HOUSE,
} from '../actionTypes'
import axios from 'axios';
import {isEmpty} from 'underscore'
import { HYDRATE } from '../actionTypes.js';

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
          key: updateInfo.key,
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
  console.log('In the action', house);
  axios.post('/api/houses/', {
    admin_user_in_house: 1,
    house_address: house.address,
    house_unit_number: house.unit,
    house_city: house.city,
    house_state: house.state,
    house_zip: house.zip,
    house_info: house.info,
  }).then((data) => {
    console.log("in the THEN",data);
    return {
      type: CREATE_HOUSE,
      payload: data.data,
    }.then(() =>{
      return true;
    });
  });
};

export const houseExist = (number) => {
  axios.get('api/houses/'+ number). then((data) =>{
    if(data.data.house_account === null || data.data.house_account === undefined){
      return false;
    }else{
      return true;
    }
  })
}


export const joinHouse = (house, user) => {
      return (dispatch,getState) =>{
        const id = getState().initReducer.user_id
        return axios.put('/api/users', {
          key: 'house_in_user',
          value: house,
          id,
        })
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
          return true
        })
      };
    }


// return(dispatch,getState) =>{
//   const id = getState().initReducer.user_id
//   console.log(id)
//   return axios.put('/api/users', {
//     key: 'house_in_user',
//     value: house,
//     id,
//   })
//   .then((res)=>{
//     console.log('response!!!',res.data)
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
//     //   console.log(q)
//     // })
//
//   };
// })
// return {
//   type: JOIN_HOUSE,
//   payload: user
// };
