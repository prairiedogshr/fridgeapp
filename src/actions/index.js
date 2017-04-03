const CHECK_HOME = 'CHECK_HOME';
const ADD_CHORE = 'ADD_CHORE';

// example action
export const isHomeless = (user) => {
  console.log('checking if homeless');
  return {
    type: CHECK_HOME,
    payload: {check: `${user} is homeless`}
  }
}

export const addChore = (choreText) => {
  console.log('adding chore: ', choreText);
  return {
    type: ADD_CHORE,
    payload: choreText
  }
}