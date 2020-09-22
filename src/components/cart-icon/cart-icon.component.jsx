import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
<<<<<<< HEAD

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
=======
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">0</span>
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
		</div>
	);
};

<<<<<<< HEAD
// const itemCount = (cartItems) =>
// 	cartItems.reduce(
// 		(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
// 		0
// 	);

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});

=======
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
=======
export default connect(null, mapDispatchToProps)(CartIcon);
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
