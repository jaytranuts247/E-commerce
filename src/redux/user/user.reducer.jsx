<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
import { SET_CURRENT_USER } from "./UserActionTypes";

>>>>>>> 2c65ed4... updating our app to redirect to home if user is signed in
const INITIAL_STATE = {
	currentUser: null,
>>>>>>> 5375a7a... added redux, and implemented userReducer and userActions to header and App Component
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
		case "SET_CURRENT_USER":
=======
		case SET_CURRENT_USER:
>>>>>>> 2c65ed4... updating our app to redirect to home if user is signed in
			return {
				...state,
				currentUser: action.payload,
			};

>>>>>>> 5375a7a... added redux, and implemented userReducer and userActions to header and App Component
		default:
			return state;
	}
};

export default userReducer;
