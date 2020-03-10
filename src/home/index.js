import React from "react";
import styles from "./index.module.less";
import CopyRight from "components/copyRight";
import Content from "../problems";

export default _ => {
	return (
		<div className={styles.main}>
			<div className={styles.header}>
				<div className={styles.title}>LeetCode解答</div>
			</div>
			<div className={styles.body}>
				<div className={styles.content}>
					<Content></Content>
				</div>
				<div className={styles.bottom}>
					<CopyRight></CopyRight>
				</div>
			</div>
		</div>
	);
};
