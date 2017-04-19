import {CHECK_HOME} from '../actionTypes'


export const isHomeless = (user) => {
  return {
    type: CHECK_HOME,
    payload: {
      check: `${user} is homeless`,
    },
  };
};
