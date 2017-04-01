const initialState = {list: ["chore 1", "chore 2", "chore 3"]};

export default function choresReducer(state = initialState, action) {
  console.log('action type outer: ', action.type);
  switch (action.type) {
    case "GET_CHORES":
      console.log('action type inner: ', action.payload.check);
      return state;
    default:
      console.log('default');
      return initialState;
  }
}
