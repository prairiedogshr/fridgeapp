const CHECK_HOME = 'CHECK_HOME'

// example action
export const isHomeless = (user) => {
  console.log('working');
  return {
    type: CHECK_HOME,
    payload: {check: `${user} is homeless`}
  }
}