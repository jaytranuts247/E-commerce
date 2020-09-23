import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> adb6e88... added checkout page, checkout item component and updated cart to use selectors from reselect.
export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

<<<<<<< HEAD
=======
>>>>>>> ae123d8... updating application with reselect, replaced cart selectors with momoized selectors
=======
>>>>>>> adb6e88... added checkout page, checkout item component and updated cart to use selectors from reselect.
export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
<<<<<<< HEAD
<<<<<<< HEAD
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(accumulatedQuantity, cartItem) =>
			accumulatedQuantity + cartItem.quantity * cartItem.price,
		0
	)
);
=======
			(accumulatedQuantity, CartItem) =>
				accumulatedQuantity + CartItem.quantity,
			0
		)
);
>>>>>>> ae123d8... updating application with reselect, replaced cart selectors with momoized selectors
=======
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(accumulatedQuantity, cartItem) =>
			accumulatedQuantity + cartItem.quantity * cartItem.price,
		0
	)
);
>>>>>>> adb6e88... added checkout page, checkout item component and updated cart to use selectors from reselect.
