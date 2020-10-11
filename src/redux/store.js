import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";

// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import logger from "redux-logger";

import persistReducer from "./root-reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

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

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
