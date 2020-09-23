<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				{" "}
				Add to cart{" "}
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
=======
import React from 'react';
=======
import React from "react";
import { connect } from "react-redux";
>>>>>>> 64aba91... created cart-item component and connected cart dropdown with cartItems reducer.

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import "./collection-item.styles.scss";

<<<<<<< HEAD
export default CollectionItem;
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
=======
const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				{" "}
				Add to cart{" "}
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
>>>>>>> 64aba91... created cart-item component and connected cart dropdown with cartItems reducer.
