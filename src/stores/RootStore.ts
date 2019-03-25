import { routes } from "../routes";

import { RouterStore, RouterState } from "mobx-state-router";

import { UserStore } from "./UserStore";

export class RootStore {

	readonly userStore: UserStore;
	readonly routerStore: RouterStore;

	constructor() {

		this.userStore = new UserStore(this);
		this.routerStore = new RouterStore(this, routes, new RouterState("notFound"))

	}

}