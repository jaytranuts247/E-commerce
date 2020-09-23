import React from "react";

import "./custom-buttom.styles.scss";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 64aba91... created cart-item component and connected cart dropdown with cartItems reducer.
const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => (
<<<<<<< HEAD
	<button
		className={`${inverted ? "inverted" : ""} ${
			isGoogleSignIn ? "google-sign-in" : ""
		} custom-button`}
=======
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button
		className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
=======
	<button
		className={`${inverted ? "inverted" : ""} ${
			isGoogleSignIn ? "google-sign-in" : ""
		} custom-button`}
>>>>>>> 64aba91... created cart-item component and connected cart dropdown with cartItems reducer.
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
