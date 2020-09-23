import { CartActionTypes } from "./cart.types";

<<<<<<< HEAD
<<<<<<< HEAD
const {
	TOGGLE_CART_HIDDEN,
	ADD_ITEM,
	CLEAR_ITEM_FROM_CART,
	REMOVE_ITEM,
} = CartActionTypes;
=======
const { TOGGLE_CART_HIDDEN } = CartActionTypes;
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
=======
const { TOGGLE_CART_HIDDEN, ADD_ITEM } = CartActionTypes;
>>>>>>> 64aba91... created cart-item component and connected cart dropdown with cartItems reducer.

export const toggleCartHidden = () => ({
	type: TOGGLE_CART_HIDDEN,
});
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 64aba91... created cart-item component and connected cart dropdown with cartItems reducer.

export const addItem = (item) => ({
	type: ADD_ITEM,
	payload: item,
});
<<<<<<< HEAD

export const clearItemFromCart = (item) => ({
	type: CLEAR_ITEM_FROM_CART,
	payload: item,
});

export const removeItem = (item) => ({
	type: REMOVE_ITEM,
	payload: item,
});
=======
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
=======
>>>>>>> 64aba91... created cart-item component and connected cart dropdown with cartItems reducer.
