import axios from 'axios'
import{
  EDIT_PROFILE
} from '../actionTypes';


export const submitProfile = (field, data) => {
  return (dispatch, getState) => {
    const state = getState()
    return axios.put('/api/users/', {
          key: field,
          value: data,
          id: this.props.user.user_id,
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
