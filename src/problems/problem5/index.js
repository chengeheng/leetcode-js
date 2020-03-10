import React from "react";
import styles from "../index.module.less";

import Highlight from "react-highlight";
const Problem = () => {
	const solution = function(s) {
		function isPalindrome(str) {
			var len = str.length;
			var middle = parseInt(len / 2);
			for (var i = 0; i < middle; i++) {
				if (str[i] !== str[len - i - 1]) {
					return false;
				}
			}
			return true;
		}
		var ans = "";
		var max = 0;
		var len = s.length;
		for (var i = 0; i < len; i++) {
			for (var r = i + 1; r <= len; r++) {
				var tmpStr = s.substring(i, r);
				if (isPalindrome(tmpStr) && tmpStr.length > max) {
					ans = tmpStr;
					max = Math.max(max, tmpStr.length);
				}
			}
		}
		return ans;
	};

	const otherSolution = function(s) {
		const len = s.length;
		if (len < 2) {
			return s;
		}
		let result = s[0];
		for (let i = 0.5, step = 0.5; i < len; i = i + step) {
			const diff = i % 1;
			for (let j = 1; ; j++) {
				const ll = i - j + diff;
				const lr = i + j - diff;
				const vl = s[ll];
				const vr = s[lr];
				if (vl === undefined || vr === undefined || vl !== vr) {
					if (lr - ll - 1 > result.length) {
						result = s.slice(ll + 1, lr);
					}
					break;
				}
			}
		}
		return result;
	};

	const input = "avavd";
	const inputShow = input;
	const output = solution(input);
	const outputShow = output;
	return (
		<div className={styles.main}>
			<div className={styles.title}>最长回文子串</div>
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
