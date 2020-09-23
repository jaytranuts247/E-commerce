export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToAdd.id
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9e4f617... added addItem and removeItem functionality to checkout item component

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === cartItemToRemove.id
	);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map((cartItem) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	);
};
<<<<<<< HEAD
=======
>>>>>>> 64aba91... created cart-item component and connected cart dropdown with cartItems reducer.
=======
>>>>>>> 9e4f617... added addItem and removeItem functionality to checkout item component
