<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
=======
import React from "react";
import { Switch, Route } from "react-router-dom";
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
<<<<<<< HEAD
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import {
	auth,
	createUserProfileDocument,
	// addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsForPreview } from "./redux/shop/shop.selector";

class App extends React.Component {
	// unsubscribeFromAuth = null;

	componentDidMount() {
		// const { setCurrentUser } = this.props;
		// this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
		// 	if (userAuth) {
		// 		const userRef = createUserProfileDocument(userAuth);
		// 		(await userRef).onSnapshot((snapShot) => {
		// 			console.log("snapshot");
		// 			setCurrentUser({
		// 				currentUser: {
		// 					id: snapShot.id,
		// 					...snapShot.data(),
		// 				},
		// 			});
		// 		});
		// 	}
		// 	setCurrentUser(userAuth);
		// });
	}
	componentWillUnmount() {
		// this.unsubscribeFromAuth();
	}
	render() {
		const { currentUser } = this.props;
		return (
			<div>
				<Header />
=======
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = createUserProfileDocument(userAuth);

				(await userRef).onSnapshot((snapShot) => {
					console.log("snapshot");

					this.setState(
						{
							currentUser: {
								id: snapShot.id,
								...snapShot.data(),
							},
						},
						() => {
							console.log("this state ", this.state);
						}
					);
				});
			}

			this.setState({ currentUser: userAuth });
		});
	}
	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.

				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
<<<<<<< HEAD
					<Route exact path="/checkout" component={CheckoutPage} />

					<Route
						exact
						path="/signin"
						render={() =>
							currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
						}
					/>
=======
					<Route path="/signin" component={SignInAndSignUpPage} />
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
				</Switch>
			</div>
		);
	}
<<<<<<< HEAD
}

const mapStateToProps = (state) => {
	console.log("mapStateToProps ", state);
	return {
		currentUser: selectCurrentUser(state),
		collectionsArray: selectCollectionsForPreview(state),
	};
};

// const mapDispatchToProps = (dispatch) => ({
// 	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
// });

export default connect(mapStateToProps)(App);
=======
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
}

export default App;
>>>>>>> 2b322ba... Initialize project using Create React App
