import { action, computed, observable } from "mobx";

import { RootStore } from "../stores/RootStore";

export class UsersController {

	private readonly rootStore: RootStore;

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}

	@computed get users() {
		return this.rootStore.userStore.users;
	}

}