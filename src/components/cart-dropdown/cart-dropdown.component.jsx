import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
<<<<<<< HEAD

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
		</div>
		<CustomButton
			onClick={() => {
				history.push("/checkout");
				dispatch(toggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
=======
=======
import { connect } from "react-redux";
>>>>>>> 64aba91... created cart-item component and connected cart dropdown with cartItems reducer.
=======
>>>>>>> adb6e88... added checkout page, checkout item component and updated cart to use selectors from reselect.

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
		</div>
		<CustomButton
			onClick={() => {
				history.push("/checkout");
				dispatch(toggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</CustomButton>
	</div>
);

<<<<<<< HEAD
<<<<<<< HEAD
export default CartDropDown;
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
=======
const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
=======
const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
>>>>>>> ae123d8... updating application with reselect, replaced cart selectors with momoized selectors
});

<<<<<<< HEAD
export default connect(mapStateToProps)(CartDropdown);
>>>>>>> 64aba91... created cart-item component and connected cart dropdown with cartItems reducer.
=======
export default withRouter(connect(mapStateToProps)(CartDropdown));
>>>>>>> adb6e88... added checkout page, checkout item component and updated cart to use selectors from reselect.
