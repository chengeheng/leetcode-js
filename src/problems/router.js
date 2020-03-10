import Example from "./example";
import Problem1 from "./problem1";
import Problem3 from "./problem3";
import Problem4 from "./problem4";
import Problem5 from "./problem5";

export const routers = [
	{
		path: "/leetcode/example",
		component: Example,
		title: "示例"
	},
	{
		path: "/leetcode/problem1",
		component: Problem1,
		title: "两数之和"
	},
	{
		path: "/leetcode/problem3",
		component: Problem3,
		title: "无重复字符的最长子串"
	},
	{
		path: "/leetcode/problem4",
		component: Problem4,
		title: "寻找两个有序数组的中位数"
	},
	{
		path: "/leetcode/problem5",
		component: Problem5,
		title: "最长回文子串"
	}
];
