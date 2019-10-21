import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./index.module.less";

import marked from "marked";
import hljs from "highlight.js";

marked.setOptions({
	renderer: new marked.Renderer(),
	gfm: true,
	tables: true,
	breaks: true,
	pedantic: false,
	sanitize: true,
	smartLists: true,
	smartypants: false,
	highlight: function(code) {
		return hljs.highlightAuto(code).value;
	}
});
const Container = props => {
	const { maxWidth, title, src, style, padding, ...restProps } = props;
	const [mdData, setMdData] = useState("");
	const containerStyle = {
		maxWidth,
		padding
	};

	useEffect(() => {
		if (src) {
			// info内需要展示的md文件
			fetch(src)
				.then(res => res.text())
				.then(text => setMdData(text));
		}
	}, [src]);

	return (
		<div className={styles.main}>
			<div style={containerStyle} className={styles.title}>
				{title}
			</div>
			{src && (
				<div className={styles.info} style={containerStyle}>
					<div
						className="content-md"
						dangerouslySetInnerHTML={{
							__html: marked(mdData)
						}}
					/>
				</div>
			)}
			<div
				{...restProps}
				className={styles.body}
				style={{ ...containerStyle, ...style }}
			></div>
		</div>
	);
};

Container.propTypes = {
	maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	style: PropTypes.object,
	padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	// 标题
	title: PropTypes.string,
	// info内需要展示的md文档
	src: PropTypes.string
};

Container.defaultProps = {
	maxWidth: "900px",
	height: "100%",
	style: {},
	padding: "5px 32px",

	title: "",
	src: ""
};

export default Container;
