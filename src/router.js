import Example from "./problems/example";
import Problem1 from "./problems/problem1";
import Problem3 from "./problems/problem3";
import Problem4 from "./problems/problem4";

export const routers = [
	{
		path: "/example",
		component: Example,
		title: "example"
	},
	{
		path: "/problem1",
		component: Problem1,
		title: "problem1"
	},
	{
		path: "/problem3",
		component: Problem3,
		title: "problem3"
	},
	{
		path: "/problem4",
		component: Problem4,
		title: "problem4"
	}
];
