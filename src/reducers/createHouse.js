import { CREATE_HOUSE, UNAUTH_USER } from '../actions/actionTypes';

// userFirstName: 'Todd',
// userLastName: 'MacIntyre',
// userBirthday: '5/5/55',
// userPhoneNumber: '777-333-9876',
// userBio: 'You don\'t pick the JavaScript life, it picks you.'

// const initialState = {
//   text: 'Thing',
// };

export default function createHouseReducer(state = {}, action) {

  switch (action.type) {
    case UNAUTH_USER:
      return { ...{} };
    case CREATE_HOUSE:
      return { ...state,
        [action.payload.field]: action.payload.data,
      };
    default:
      return state;
  }
}
