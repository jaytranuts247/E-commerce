<<<<<<< HEAD
import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUp />
	</div>
=======
import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
  </div>
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
);

export default SignInAndSignUpPage;
