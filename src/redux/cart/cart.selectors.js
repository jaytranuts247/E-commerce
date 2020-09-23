import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

<<<<<<< HEAD
export const selectCartHidden = createSelector(
	[selectCart],
	(cart) => cart.hidden
);

=======
>>>>>>> ae123d8... updating application with reselect, replaced cart selectors with momoized selectors
export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
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
