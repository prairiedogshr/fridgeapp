import { EDIT_PROFILE, UNAUTH_USER } from '../actions/actionTypes';

// userFirstName: 'Todd',
// userLastName: 'MacIntyre',
// userBirthday: '5/5/55',
// userPhoneNumber: '777-333-9876',
// userBio: 'You don\'t pick the JavaScript life, it picks you.'

// const initialState = {
//   text: 'Thing',
// };
export default function userReducer(state = {}, action) {
  console.log('action type outer: ', action.type);
  switch (action.type) {
    case UNAUTH_USER:
      return { ...{} };
    case EDIT_PROFILE:
      console.log('action payload inner: ', action.payload);
      return { ...state,
        [action.payload.field]: action.payload.data,
      };
    default:
      return state;
  }
}
