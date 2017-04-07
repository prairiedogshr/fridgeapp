import axios from 'axios';
import cookie from 'cookie';
import { browserhistory } from 'react-router';
import{
  ADD_USER,
  REMOVE_USER,
  UPDATE_HOUSE_INFO
} from '../actionTypes'

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
    payload: user,
  };
};
