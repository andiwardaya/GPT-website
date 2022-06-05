import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => {
	return (
		<div className="gpt3__header section__padding" id="home">
			<div className="gpt3__header-content">
				<h1 className="gradient__text">
					Lets Build Somethine Amazing with GPT-3 Open AI
				</h1>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make .</p>
				<div className="gpt3__header-content__input">
					<input type="email" placeholder="enter your email" />
					<button type="button">Get Started</button>
				</div>

				<div className="gpt3__header-content__people">
					<img src={people} alt="peopele" />
					<p>600 people requested access a visit in last 24 hour </p>
				</div>
			</div>	
			<div className="gpt3__header-image">
				<img src={ai} alt="Artificial Intelegence" />
			</div>
		</div>
	)
};


export default Header;