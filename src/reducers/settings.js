const initialState = {
  setting1: true,
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {

    default:
      console.log('default');
      return state;
  }
}
