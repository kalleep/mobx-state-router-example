import * as React from "react";

import { inject, observer } from "mobx-react";

import { RootStore } from "../../stores/RootStore";

interface IProps {
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
			<div style={{ display: "flex" }} >
				home

				<button onClick={() => this.goToHome()}>home</button>
			</div>
		)
	}
}