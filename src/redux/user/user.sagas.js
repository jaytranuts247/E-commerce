import { takeLatest, all, call, put } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import { signInSuccess, signInFailure } from "./user.actions";

import {
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser,
} from "../../firebase/firebase.utils";

const { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } = UserActionTypes;

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(
			createUserProfileDocument,
			userAuth,
			additionalData
		);
		const userSnapshot = yield userRef.get();
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithGoogle() {
	console.log("signInWithGoogle...");
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	console.log("signInWithEmail...", email, password);
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();
		if (!userAuth) return;
		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
	yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* checkUserSession() {
	yield (UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(checkUserSession),
	]);
}
