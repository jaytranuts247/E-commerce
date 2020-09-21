import React from "react";
<<<<<<< HEAD
import { connect } from "react-redux";
=======
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

<<<<<<< HEAD
<<<<<<< HEAD
// import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import {
	emailSignInStart,
	googleSignInStart,
} from "../../redux/user/user.actions";
=======
import { signInWithGoogle } from "../../firebase/firebase.utils";
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
=======
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
>>>>>>> 9a93ef9... finish sign in handleSubmit method

import "./sign-in.styles.scss";

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
	}

<<<<<<< HEAD
<<<<<<< HEAD
	handleSubmit = async (event) => {
		event.preventDefault();
		const { emailSignInStart } = this.props;
		const { email, password } = this.state;
		// try {
		// 	await auth.signInWithEmailAndPassword(email, password);
		// 	this.setState({ email: "", password: "" });
		// } catch (error) {
		// 	console.log(error);
		// }

		emailSignInStart(email, password);
=======
	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: "", password: "" });
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
=======
	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (error) {
			console.log(error);
		}
>>>>>>> 9a93ef9... finish sign in handleSubmit method
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
<<<<<<< HEAD
		const { googleSignInStart } = this.props;
=======
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						handleChange={this.handleChange}
						value={this.state.email}
						label="email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>
					<div className="buttons">
						<CustomButton type="submit"> Sign in </CustomButton>
<<<<<<< HEAD
						<CustomButton onClick={googleSignInStart} isGoogleSignIn>
=======
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
							{" "}
							Sign in with Google{" "}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

<<<<<<< HEAD
const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
=======
export default SignIn;
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
