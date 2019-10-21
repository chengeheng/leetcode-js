import React from "react";
import styles from "../index.module.less";

import Highlight from "react-highlight";
const Example = () => {
	const solution = name => {
		console.log(`Hello ${name}`);
		return `Hello ${name}`;
	};

	const input = "ghchen";
	let output = solution(input);
	return (
		<div className={styles.main}>
			<div className={styles.title}>example</div>
			<div className={styles.body}>
				<div className={styles.code}>
					<Highlight className="javascript">
						{solution.toString()}
					</Highlight>
				</div>
				<div className={styles.show}>
					<div className={styles.input}>
						<div className={styles.input_title}>输入：</div>
						<div className={styles.input_value}>{input}</div>
					</div>
					<div className={styles.output}>
						<div className={styles.output_title}>输出：</div>
						<div className={styles.output_value}>{output}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Example;
