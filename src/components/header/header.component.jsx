import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
=======
import { connect } from "react-redux";
>>>>>>> 5375a7a... added redux, and implemented userReducer and userActions to header and App Component

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
=======

import { ReactComponent as Logo } from "../../assets/crown.svg";
<<<<<<< HEAD
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
=======
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

<<<<<<< HEAD
<<<<<<< HEAD
const Header = ({ currentUser, hidden }) => (
=======
const Header = ({ currentUser }) => (
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
=======
const Header = ({ currentUser, hidden }) => (
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
	<div className="header">
		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			{currentUser ? (
				<div className="option" onClick={() => auth.signOut()}>
					SIGN OUT
				</div>
			) : (
				<Link className="option" to="/signin">
					SIGN IN
				</Link>
			)}
<<<<<<< HEAD
<<<<<<< HEAD
			<CartIcon />
		</div>
		{hidden ? null : <CartDropDown />}
	</div>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
=======
=======
			<CartIcon />
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
		</div>
		{hidden ? null : <CartDropDown />}
	</div>
);

<<<<<<< HEAD
<<<<<<< HEAD
export default Header;
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
=======
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
=======
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
>>>>>>> 69372a8... added cartIcon and cartDropdown components to our application, also implemented cart reducer.
});

export default connect(mapStateToProps)(Header);
>>>>>>> 5375a7a... added redux, and implemented userReducer and userActions to header and App Component
