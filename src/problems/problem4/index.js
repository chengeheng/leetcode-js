import React from "react";
import styles from "../index.module.less";

import Highlight from "react-highlight";
const Problem = () => {
	const solution = function(nums1, nums2) {
		var num = [];
		nums1.concat(nums2);
		num = nums1.concat(nums2);
		num.sort((a, b) => a - b);
		if (num.length % 2 === 1) return num[(num.length - 1) / 2];
		else return (num[num.length / 2 - 1] + num[num.length / 2]) / 2;
	};

	const otherSolution = function(nums1, nums2) {
		if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

		const length1 = nums1.length;
		const length2 = nums2.length;
		let min = 0;
		let max = length1;
		let half = Math.floor((length1 + length2 + 1) / 2);
		while (max >= min) {
			const i = Math.floor((max + min) / 2);
			const j = half - i;
			if (i > min && nums1[i - 1] > nums2[j]) {
				max = i - 1;
			} else if (i < max && nums1[i] < nums2[j - 1]) {
				min = i + 1;
			} else {
				let left, right;
				if (i === 0) left = nums2[j - 1];
				else if (j === 0) left = nums1[i - 1];
				else left = Math.max(nums1[i - 1], nums2[j - 1]);

				if (i === length1) right = nums2[j];
				else if (j === length2) right = nums1[i];
				else right = Math.min(nums1[i], nums2[j]);

				return (length1 + length2) % 2 ? left : (left + right) / 2;
			}
		}
		return 0;
	};

	const input = [
		[1, 2, 3],
		[2, 4]
	];
	const inputShow = input.map(item => JSON.stringify(item));
	const output = solution(...input);
	const outputShow = output;
	return (
		<div className={styles.main}>
			<div className={styles.title}>寻找两个有序数组的中位数</div>
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
