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
export class HomePage extends React.Component<IProps> {

	get injected(): InjectedProps {
		return this.props as InjectedProps
	}

	goToUsers() {
		const { rootStore } = this.injected;
		rootStore.routerStore.goTo("users");
	}

	render() {


		return(
			<div style={{ display: "flex" }} >
				home

				<button onClick={() => this.goToUsers()}>users</button>
			</div>
		)
	}
}