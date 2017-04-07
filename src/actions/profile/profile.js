import axios from 'axios';
import cookie from 'cookie';
import { browserhistory } from 'react-router';

import{
  EDIT_PROFILE
} from '../actionTypes'


export const updateProfile = (field, data) => {
  console.log(field, data);
  return {
    type: EDIT_PROFILE,
    payload: {
      field,
      data,
    },
  };
};
