import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
<<<<<<< HEAD
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
=======

>>>>>>> ae123d8... updating application with reselect, replaced cart selectors with momoized selectors
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHidden}>
			<ShoppingIcon className="shopping-icon" />
<<<<<<< HEAD
			<span className="item-count">0</span>
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
=======
			<span className="item-count">{itemCount}</span>
>>>>>>> ae123d8... updating application with reselect, replaced cart selectors with momoized selectors
		</div>
	);
};

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae123d8... updating application with reselect, replaced cart selectors with momoized selectors
// const itemCount = (cartItems) =>
// 	cartItems.reduce(
// 		(accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
// 		0
// 	);

const mapStateToProps = (state) => ({
	itemCount: selectCartItemsCount(state),
});

<<<<<<< HEAD
=======
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
=======
>>>>>>> ae123d8... updating application with reselect, replaced cart selectors with momoized selectors
const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

<<<<<<< HEAD
<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
=======
export default connect(null, mapDispatchToProps)(CartIcon);
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
=======
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
>>>>>>> ae123d8... updating application with reselect, replaced cart selectors with momoized selectors
