import React from "react";
import gpt3Logo from "../../assets/logo.svg";

import "./footer.css";

const Footer = () => {
	return (
		<div className="gpt3__footer section__padding">
				<div className="gpt3__footer-heading">
					<h1 className="gradient__text">
						Do you want to step in to future before others
					</h1>
				</div>	

				<div className="gpt3__footer-btn">
					<p>Request early acces</p>
				</div>

				<div className="gpt3__footer-links">
					<div className="gpt3__footer-links_logo">
						<img src={gpt3Logo} alt="logo"/>
						<p>Jalan mangga 16 B Kecamatan Sumbersari, Kota Lumajang.</p>
					</div>
					<div className="gpt3__footer-links_div">
						<h4>Links</h4>
						<p>Owners</p>
						<p>Social Media</p>
						<p>Counters</p>
						<p>Contact</p>
					</div>
					<div className="gpt3__footer-links_div">
						<h4>Company</h4>
						<p>Terms & Condition</p>
						<p>Privacy & Policy</p>
						<p>Contact</p>
					</div>
					<div className="gpt3__footer-links_div">
						<h4>Get In Touch</h4>
						<p>Jalan mangga, Kota Lumajang</p>
						<p>081283838383</p>
						<p>infolumajang@gmail.com</p>
					</div>
				</div>

				<div className="gpt3__footer-copyright">
					<p>Hak cipta dilindungi Undang-undang. 2022</p>
				</div>
			
		</div>
	)
};


export default Footer;