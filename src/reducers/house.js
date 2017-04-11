import { ADD_USER, REMOVE_USER, UPDATE_HOUSE_INFO, RECEIVE_HOUSE, ROTATE_GROUPS, } from '../actions/actionTypes.js';



const initialState = {
	info: {
		idHouse: 1,
		address: '1600 Pennsylvania Ave NW',
		unit_number: 0,
		city: 'Washington, DC',
		state: 'District of Columbia',
		zip: 20500,
		info: 'white house',
		created_at: new Date(),
		updated_at: new Date(),
		admin: 1
	},
	users: [{
  "user_id": 1,
  "user_first_name": "David",
  "user_last_name": "",
  "user_email": "",
  "user_username": "kblanda",
  "user_password": "$2a$10$RO2OQG.c14K2iy74//vYMO2AxURxMbx5WOmLap1XhkI.TQa02AVnS",
  "user_phone": "",
  "house_in_user": 20,
  "user_is_admin": 0,
  "user_info": "",
  "created_at": null,
  "updated_at": null
},
{
  "user_id": 2,
  "user_first_name": "Celestine",
  "user_last_name": "Hyatt",
  "user_email": "oral.batz@example.com",
  "user_username": "adonis29",
  "user_password": "$2a$10$RO2OQG.c14K2iy74//vYMO2AxURxMbx5WOmLap1XhkI.TQa02AVnS",
  "user_phone": "3114783052",
  "house_in_user": 20,
  "user_is_admin": 0,
  "user_info": "Pariatur expedita omnis qui dolore. Occaecati et rerum veritatis dolor. Quasi et optio omnis aliquam et sed.",
  "created_at": null,
  "updated_at": null
}],
  loaded: false
};

export default function houseReducer(state = {}, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case REMOVE_USER:
      return {
        ...state,
        users: [...state.users].filter(user => user.id !== action.payload),
      };

    case UPDATE_HOUSE_INFO: {
      const update = {};
      update[action.payload.item] = action.payload.value;
      return {
        ...state,
        info: {
          ...state.info,
          ...update,
        },
      };
    }

    case RECEIVE_HOUSE: {
      console.log('hello? inside receive house with action: ', action)
      const newState = {...state,...action.payload,loaded:true}
      console.log('heres the new state: ', newState)
      return {
        ...state,
        info: {
          ...action.payload
        },
        loaded: true
      }
    }

    case ROTATE_GROUPS:
      // payload: { roomie, newRotation }
      newRoomie = Object.assign({}, action.payload.roomie, { user_chore_rotation: action.payload.newRotation });
      return {
        ...state,
        users: state.users.map(user => {
          if (user.user_id === action.payload.roomie.user_id) {
            return newRoomie;
          }
          return user;
        }),
      }

    default:
    console.log('house reducer running default: ', state)
      return state;
  }
}
