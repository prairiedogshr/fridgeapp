import { ADD_USER, REMOVE_USER, UPDATE_HOUSE_INFO } from '../actions/actionTypes';

const initialState = {
	info: {
		idHouse: 1,
		address: '1600 Pennsylvania Ave NW',
		unit_number: 0,
		city: 'Washington, DC',
		zip: 20500,
		info: 'white house',
		created_at: new Date(),
		updated_at: new Date(),
		admin: 1
	},
	users: [
	{
		name: 'Mike'
	}]
}

export default function houseReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_USER: 
			return {
				...state,
				users: [...state.users, action.payload]
			};

		case REMOVE_USER:
			return {
				...state,
				users: [...state.users].filter(user => user.id !== action.payload)
			};

		case UPDATE_HOUSE_INFO: 
			return {
				...state,
				info: {
					...state.info,
					item: action.payload.item,
					value: action.payload.value	
				}
			};

		default:
			return state;
	}
}