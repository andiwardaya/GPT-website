import React from "react";
import possibilityImage from "../../assets/possibility.png";

import "./possibility.css";

const Possibility = () => {
	return (
		<div className="gpt3__possibility" id="possibility">
			<div className="gpt3__possibility-image">
				<img src={possibilityImage} alt="possibility" />
			</div>
			<div className="gpt3__possibility-content">
				<h4>Request early acces to get started</h4>
				<h1 className="gradient__text"> The possibilities are beyond your imagination </h1>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
				<h4>Request early acces to get started</h4>
			</div>

		</div>
	)
};


export default Possibility;