import { RouterStore, RouterState } from "mobx-state-router";
import { routes } from "../routes";

interface Test {

}

export class RootStore {

	routerStore: RouterStore;

	constructor() {
		this.routerStore = new RouterStore(this, routes, new RouterState("notFound"))
	}

}