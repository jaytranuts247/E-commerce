import SHOP_DATA from "./shop.data";

<<<<<<< HEAD
import ShopActionTypes from "./shop.types";
const {
	FETCH_COLLECTIONS_START,
	FETCH_COLLECTIONS_SUCCESS,
	FETCH_COLLECTIONS_FAILURE,
} = ShopActionTypes;

const INITIAL_STATE = {
	collections: SHOP_DATA,
	isFetching: false,
	errorMessage: undefined,
=======
const INITIAL_STATE = {
	collections: SHOP_DATA,
>>>>>>> ddf0062... moved directory and shop data into its reducer, create respective selectors and updated corresponding components with new redux flow for directory/shop
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
<<<<<<< HEAD
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
=======
>>>>>>> ddf0062... moved directory and shop data into its reducer, create respective selectors and updated corresponding components with new redux flow for directory/shop
		default:
			return state;
	}
};

export default shopReducer;
