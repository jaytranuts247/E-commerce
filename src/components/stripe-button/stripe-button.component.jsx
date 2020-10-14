import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HWpYQH2fzynofDriYjIsFrL0daSIqb7R58bzaTS6coT440DjAhIGOw5x5T5GjiDa3fnVkt8mhW3OsOFCnZOyzMA00FUkYdvfw";

	const onToken = (token) => {
		console.log(token);
		alert("Payment successful");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://sendeyo.com/up/d/f3eb2117da"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
}

export default StripeCheckoutButton;
