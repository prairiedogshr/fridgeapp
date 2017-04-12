import axios from 'axios'
import{
  EDIT_PROFILE
} from '../actionTypes';


export const submitProfile = (field, data, id) => {
  return (dispatch, getState) => {
    const state = getState()
    return axios.put('/api/users/', {
          key: field,
          value: data,
          id,
        })
        .then((res)=>{
          return dispatch({
            type: EDIT_PROFILE,
            payload: { field, data },
          })
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
