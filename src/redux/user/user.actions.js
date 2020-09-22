<<<<<<< HEAD
<<<<<<< HEAD
import { UserActionTypes } from "./user.types";

const {
	SET_CURRENT_USER,
	GOOGLE_SIGN_IN_START,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	EMAIL_SIGN_IN_START,
} = UserActionTypes;

export const googleSignInStart = () => ({
	type: GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
	type: EMAIL_SIGN_IN_START,
	payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
	type: SIGN_IN_SUCCESS,
	payload: user,
});

export const signInFailure = (error) => ({
	type: SIGN_IN_FAILURE,
	payload: error,
});
=======
=======
import { SET_CURRENT_USER } from "./UserActionTypes";

>>>>>>> 2c65ed4... updating our app to redirect to home if user is signed in
export const setCurrentUser = (user) => ({
	type: SET_CURRENT_USER,
	payload: user,
});
>>>>>>> 5375a7a... added redux, and implemented userReducer and userActions to header and App Component
