import { Route } from "mobx-state-router";

export const routes: Route[] = [
	{
		name: "home",
		pattern: "/"
	},
	{
		name: "users",
		pattern: "/users"
	},
	{
		name: "notFound",
		pattern: "/404"
	}
];