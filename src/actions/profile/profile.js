import axios from 'axios'
import{
  EDIT_PROFILE
} from '../actionTypes';


export const submitProfile = (field, data) => {
  console.log(field, data);
  return (dispatch, getState) => {
    const state = getState()
    //const id = state.userReducer.id
    console.log(state)

    return axios.put('/api/users/', {
          key: field,
          value: data,
          id: 1,
        })
        .then((res)=>{
          console.log(res)
        })

    // return {
    //   type: EDIT_PROFILE,
    //   payload: {
    //     field,
    //     data,
    //   },
    // };
  };
};
