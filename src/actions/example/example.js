import {CHECK_HOME} from '../actionTypes'


export const isHomeless = (user) => {
  console.log('ACTION - checking if homeless');
  return {
    type: CHECK_HOME,
    payload: {
      check: `${user} is homeless`,
    },
  };
};
