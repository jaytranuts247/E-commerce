import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import logger from "redux-logger";

import persistReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

const initialState = {};

export const store = createStore(
	persistReducer,
	initialState,
	compose(
		applyMiddleware(...middlewares),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export const persistor = persistStore(store);

export default { store, persistor };
