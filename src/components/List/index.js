import React from "react";
import styles from "./index.module.less";

import { jumpToPage } from "utils/utils";

export default props => {
	const { path, history, title, selected } = props;
	return (
		<div
			className={`${styles.main} ${selected ? styles.selected : ""}`}
			onClick={() => jumpToPage(history, path)}
			title={title}
		>
			{title}
		</div>
	);
};
