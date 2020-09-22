import { combineReducers } from "redux";
<<<<<<< HEAD
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
=======

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
	user: userReducer,
	cart: cartReducer,
});
>>>>>>> 5375a7a... added redux, and implemented userReducer and userActions to header and App Component
