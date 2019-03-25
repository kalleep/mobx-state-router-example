import { RootStore } from "./RootStore";

import {
	action,
	observable,
	IObservableArray
} from "mobx";

interface IUser {
	id: number
	name: string
	username: string
}

export class UserStore {

	private readonly rootStore: RootStore;
	@observable users: IObservableArray<IUser> = observable([]);

	constructor(rootStore: RootStore) {
		this.rootStore = rootStore;

		this.users.push({ id: 1, name: "kalle", username: "kalle" });

	}

	@action addUser(user: IUser) {
		this.users.push(user);
	}

	@action deleteUser(user: IUser) {
		this.users.remove(user);
	}

}