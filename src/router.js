import Example from "./problems/example";
import Problem1 from "./problems/problem1";

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
	}
];
