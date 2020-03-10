import React from "react";
import styles from "../index.module.less";

import Highlight from "react-highlight";
const Problem = () => {
	const solution = function(nums, target) {
		let result = [];
		nums.forEach((item, index) => {
			let nextIndex = nums.indexOf(target - item);
			if (
				nextIndex !== -1 &&
				result.indexOf(index) < 0 &&
				index !== nextIndex
			) {
				result.push(index, nextIndex);
			}
		});
		return result;
	};

	const otherSolution = function(nums, target) {
		const map = new Map();
		for (let i = 0; i < nums.length; i++) {
			const otherIndex = map.get(target - nums[i]);
			if (otherIndex !== undefined) return [otherIndex, i];
			map.set(nums[i], i);
		}
	};

	const input = [[3, 2, 4], 6];
	const inputShow = input.map(item => JSON.stringify(item));
	const output = solution(...input);
	const outputShow = JSON.stringify(output);
	return (
		<div className={styles.main}>
			<div className={styles.title}>两数之和</div>
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
						<div className={styles.input_value}>
							{inputShow.join(",")}
						</div>
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
