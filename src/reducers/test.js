
const initialState = "";

let counter = 0;

export default function homelessReducer(state = initialState, action) {
  console.log('action type outer: ', action.type);
  switch (action.type) {
    case "CHECK_HOME":
      console.log('action type inner: ', action.payload.check);
      counter++;
      return [
        ...state,
        `${action.payload.check} ${counter}`
      ]
    default:
      console.log('default');
      return [initialState];
  }
}