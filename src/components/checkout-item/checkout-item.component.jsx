import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9e4f617... added addItem and removeItem functionality to checkout item component
import { connect } from "react-redux";

import {
	clearItemFromCart,
	removeItem,
	addItem,
} from "../../redux/cart/cart.actions";
<<<<<<< HEAD

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	removeItem: (item) => dispatch(removeItem(item)),
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
=======
=======
>>>>>>> 9e4f617... added addItem and removeItem functionality to checkout item component

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow" onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	removeItem: (item) => dispatch(removeItem(item)),
	addItem: (item) => dispatch(addItem(item)),
});

<<<<<<< HEAD
export default CheckoutItem;
>>>>>>> adb6e88... added checkout page, checkout item component and updated cart to use selectors from reselect.
=======
export default connect(null, mapDispatchToProps)(CheckoutItem);
>>>>>>> 9e4f617... added addItem and removeItem functionality to checkout item component
