import SHOP_DATA from "./shop.data";

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9ad5669... added redux-thunk and refactor collection and collections-overview
import ShopActionTypes from "./shop.types";
const {
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
	FETCH_COLLECTIONS_FAILURE,
} = ShopActionTypes;

<<<<<<< HEAD
const INITIAL_STATE = {
	collections: SHOP_DATA,
	isFetching: false,
	errorMessage: undefined,
=======
const INITIAL_STATE = {
	collections: SHOP_DATA,
>>>>>>> ddf0062... moved directory and shop data into its reducer, create respective selectors and updated corresponding components with new redux flow for directory/shop
=======
const INITIAL_STATE = {
	collections: SHOP_DATA,
	isFetching: false,
	errorMessage: undefined,
>>>>>>> 9ad5669... added redux-thunk and refactor collection and collections-overview
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9ad5669... added redux-thunk and refactor collection and collections-overview
		case FETCH_COLLECTIONS_START:
			return {
				...state,
				isFetching: true,
			};
		case FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: action.payload,
			};
		case FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
<<<<<<< HEAD
=======
>>>>>>> ddf0062... moved directory and shop data into its reducer, create respective selectors and updated corresponding components with new redux flow for directory/shop
=======
>>>>>>> 9ad5669... added redux-thunk and refactor collection and collections-overview
		default:
			return state;
	}
};

export default shopReducer;
