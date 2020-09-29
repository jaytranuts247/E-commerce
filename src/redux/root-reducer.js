import { combineReducers } from "redux";
<<<<<<< HEAD
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
=======
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
>>>>>>> ddf0062... moved directory and shop data into its reducer, create respective selectors and updated corresponding components with new redux flow for directory/shop

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
<<<<<<< HEAD
>>>>>>> 5375a7a... added redux, and implemented userReducer and userActions to header and App Component
=======

export default persistReducer(persistConfig, rootReducer);
>>>>>>> ddf0062... moved directory and shop data into its reducer, create respective selectors and updated corresponding components with new redux flow for directory/shop
