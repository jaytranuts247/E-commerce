<<<<<<< HEAD
<<<<<<< HEAD
=======
import userEvent from "@testing-library/user-event";
>>>>>>> adb6e88... added checkout page, checkout item component and updated cart to use selectors from reselect.
=======
>>>>>>> ddf0062... moved directory and shop data into its reducer, create respective selectors and updated corresponding components with new redux flow for directory/shop
import { createSelector } from "reselect";

const selectUser = (state) => state.user;
// const selectCart = (state) => state.cart;

export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.currentUser
);
