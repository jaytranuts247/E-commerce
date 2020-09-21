import React from "react";

import "./custom-buttom.styles.scss";

<<<<<<< HEAD
const CustomButton = ({
	children,
	isGoogleSignIn,
	inverted,
	...otherProps
}) => (
	<button
		className={`${inverted ? "inverted" : ""} ${
			isGoogleSignIn ? "google-sign-in" : ""
		} custom-button`}
=======
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
	<button
		className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
