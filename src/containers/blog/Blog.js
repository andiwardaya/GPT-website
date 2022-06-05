import React from "react";
import { Article } from "../../components";
import {blog01, blog02, blog03, blog04, blog05} from "./imports";

import "./blog.css";

const Blog = () => {
	return (
		<div className="gpt3__blog" id="blog">
			<div className="gpt3__blog-heading">
				<h1 className="gradient__text">
					A lot is happening, We are blogging about it.
				</h1>
			</div>
			<div className="gpt3__blog-container">
				<div className="gpt3__blog-container_groupA">
					<Article imgUrl={blog01} date="Dec 23, 2022" title="BLOG-1 Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
				</div>
				<div className="gpt3__blog-container_groupB">
					<Article imgUrl={blog02} date="Dec 23, 2022" title="BLOG-2 Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
					<Article imgUrl={blog03} date="Dec 23, 2022" title="BLOG-3 Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
					<Article imgUrl={blog04} date="Dec 23, 2022" title="BLOG-4 Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
					<Article imgUrl={blog05} date="Dec 23, 2022" title="BLOG-5 Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
				</div>
			</div>
		</div>
	)
};


export default Blog;