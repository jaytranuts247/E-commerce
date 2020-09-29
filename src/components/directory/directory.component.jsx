<<<<<<< HEAD
<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
=======
import React from 'react';
=======
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
>>>>>>> ddf0062... moved directory and shop data into its reducer, create respective selectors and updated corresponding components with new redux flow for directory/shop

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

const Directory = ({ sections }) => (
	<div className="directory-menu">
		{sections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections,
});

<<<<<<< HEAD
export default Directory;
>>>>>>> 7b84abf... implemented firebase utils, including ability to store authenticated users into firestore database.
=======
export default connect(mapStateToProps)(Directory);
>>>>>>> ddf0062... moved directory and shop data into its reducer, create respective selectors and updated corresponding components with new redux flow for directory/shop
