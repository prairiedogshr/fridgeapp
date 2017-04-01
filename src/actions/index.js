const CHECK_HOME = 'CHECK_HOME';
// const GET_CHORES = 'GET_CHORES';

// example action
export const isHomeless = (user) => {
  console.log('checking if homeless');
  return {
    type: CHECK_HOME,
    payload: {check: `${user} is homeless`}
  }
}

// export const getChores = () => {
//   console.log('getting chores');
//   return {
//     type: GET_CHORES,
//     payload: null
//   }
// }