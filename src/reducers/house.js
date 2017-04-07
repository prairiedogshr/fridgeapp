import { ADD_USER, REMOVE_USER, UPDATE_HOUSE_INFO, RECEIVE_HOUSE } from '../actions/actionTypes.js';


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
	users: [2],
  loaded: false
};

export default function houseReducer(state = initialState, action) {
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
    default:
      return state;
  }
}
