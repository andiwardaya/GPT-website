import React from "react";
import {Feature} from "../../components";


import "./features.css";

const featuresData = [
	{
		title: "Improving end distrust instantly",
		text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
	},

	{
		title: "Become active",
		text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
	},

	{
		title: "Message or am nothing",
		text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
	},

	{
		title: "Fast and Secure",
		text : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
	}
];

const Features = () => {
	return (
		<div className="gpt3__features" id="features">
			<div className="gpt3__features-heading">
				<h1 className="gradient__text">
					The future is now and you just need to realize it. Step into futuren today and make it happen.
				</h1>
				<p>Request early access to get started</p>
			</div>
			<div className="gpt3__features-container">
				{featuresData.map((item, index) => (
					<Feature  title={item.title} text={item.text} key={item.title + index} />
				))}
			</div>
		</div>
	)
};


export default Features;