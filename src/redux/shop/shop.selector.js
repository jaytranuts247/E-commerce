import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const COLLECTION_ID_MAP = {
	hats: 1,
	sneakers: 2,
	jackets: 3,
	womens: 4,
	mens: 5,
};

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
<<<<<<< HEAD
	(collections) =>
		collections ? Object.keys(collections).map((key) => collections[key]) : []
=======
	(collections) => Object.keys(collections).map((key) => collections[key])
>>>>>>> ddf0062... moved directory and shop data into its reducer, create respective selectors and updated corresponding components with new redux flow for directory/shop
);

// use memoize from lodash to memoize the whole function including -- collectionUrlParam -- as it is previously outside the scope of selector which will cause re-rendering on every state changes
export const selectCollection = memoize((collectionUrlParam) =>
<<<<<<< HEAD
	createSelector([selectCollections], (collections) =>
		collections ? collections[collectionUrlParam] : null
	)
);

export const selectIsCollectionFetching = createSelector(
	[selectShop],
	(shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
	[selectShop],
	(shop) => !!shop.collections // double bangs -> isObject
);
=======
	createSelector(
		[selectCollections],
		(collections) => collections[collectionUrlParam]
	)
);
>>>>>>> ddf0062... moved directory and shop data into its reducer, create respective selectors and updated corresponding components with new redux flow for directory/shop
