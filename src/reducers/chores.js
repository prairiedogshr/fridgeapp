const initialState = {list: ["chore 1", "chore 2", "chore 3"]};

export default function choresReducer(state = initialState, action) {
  console.log('action type outer: ', action.type);
  switch (action.type) {
    case "ADD_CHORE":
      console.log('action payload inner: ', action.payload);
      return {...state, list: [...state.list, action.payload]}
    default:
      console.log('default');
      return initialState;
  }
}
