import { SET_CURRENT_USER } from "./UserActionTypes";

export const setCurrentUser = (user) => ({
	type: SET_CURRENT_USER,
	payload: user,
});
