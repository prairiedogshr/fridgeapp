const initialState = '';

let counter = 0;

export default function homelessReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHECK_HOME':
      counter++;
      return [
        ...state,
        `${action.payload.check} ${counter}`,
      ];
    default:
      return [initialState];
  }
}
