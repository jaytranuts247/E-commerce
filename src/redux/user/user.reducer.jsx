import { UserActionTypes } from "./user.types";

const {
	SET_CURRENT_USER,
	GOOGLE_SIGN_IN_START,
	EMAIL_SIGN_IN_START,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
} = UserActionTypes;

const INITIAL_STATE = {
	currentUser: null,
	error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null,
			};
		case SIGN_IN_FAILURE:
			return {
				...state,
				error: action.payload,
				currentUser: null,
			};
		default:
			return state;
	}
};

export default userReducer;
