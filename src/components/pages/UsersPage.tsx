import * as React from "react";

import { inject, observer } from "mobx-react";

import { RootStore } from "../../stores/RootStore";

import { UsersController } from "../../controllers/UsersController";


interface IProps {
	controller: UsersController
};

interface InjectedProps extends IProps {
	rootStore: RootStore
};

@inject("rootStore")
@observer
export class UsersPage extends React.Component<IProps> {

	get injected(): InjectedProps {
		return this.props as InjectedProps
	}

	goToHome() {
		const { rootStore } = this.injected;
		rootStore.routerStore.goTo("home");
	}

	render() {


		return(
			<div style={{ display: "flex", flexDirection: "column" }} >
				home

				<ul>
					{this.props.controller.users.map(u => (
						<li key={u.id}>
							{u.username}
						</li>
					))}
				</ul>

				<button onClick={() => this.goToHome()}>home</button>
			</div>
		)
	}
}