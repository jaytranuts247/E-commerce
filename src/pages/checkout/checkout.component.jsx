import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
<<<<<<< HEAD
<<<<<<< HEAD
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
=======
>>>>>>> adb6e88... added checkout page, checkout item component and updated cart to use selectors from reselect.
=======
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
>>>>>>> d27162f... updating stripe integration and updating favicon and title

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} cartItem={cartItem} />
		))}

		<div className="total">
			<span>TOTAL: ${total}</span>
		</div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d27162f... updating stripe integration and updating favicon and title
		<div className="test-warning">
			*Please use the following test credit card for payments*
			<br />
			4242 4242 4242 4242 - Exp: 11/23 - CVV: 123
		</div>
		<StripeCheckoutButton price={total} />
<<<<<<< HEAD
=======
>>>>>>> adb6e88... added checkout page, checkout item component and updated cart to use selectors from reselect.
=======
>>>>>>> d27162f... updating stripe integration and updating favicon and title
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
