import React from "react";
import styles from "../index.module.less";

import Highlight from "react-highlight";
const Problem = () => {
	const solution = function(s) {
		let arr = s.split("");
		let res = 0;
		while (arr.length > 0) {
			let middleArr = [];
			let i = 0;
			while (arr[i] && middleArr.indexOf(arr[i]) < 0) {
				middleArr.push(arr[i]);
				i++;
			}
			arr.splice(0, 1);
			if (res < middleArr.length) res = middleArr.length;
		}
		return res;
	};

	const otherSolution = function(s) {
		let len = 0;
		let val = "";
		for (let i = 0; i < s.length; i++) {
			if (val.indexOf(s[i]) === -1) {
				val = val + s[i];
				if (val.length > len) {
					len = val.length;
				}
			} else {
				val = val + s[i];
				let index = val.indexOf(s[i]);
				val = val.slice(index + 1);
			}
		}
		return len;
	};

	const input = "asdweasd";
	const inputShow = input;
	const output = solution(...input);
	const outputShow = output;
	return (
		<div className={styles.main}>
			<div className={styles.title}>3. 无重复字符的最长子串</div>
			<div className={styles.body}>
				<div className={styles.code}>
					<Highlight className="javascript">
						{solution.toString()}
					</Highlight>
					<div className={styles.otherSolution}>他人解法：</div>
					<Highlight className="javascript">
						{otherSolution.toString()}
					</Highlight>
				</div>
				<div className={styles.show}>
					<div className={styles.input}>
						<div className={styles.input_title}>输入：</div>
						<div className={styles.input_value}>{inputShow}</div>
					</div>
					<div className={styles.output}>
						<div className={styles.output_title}>输出：</div>
						<div className={styles.output_value}>{outputShow}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Problem;
