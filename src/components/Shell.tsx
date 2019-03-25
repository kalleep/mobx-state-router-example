
import * as React from "react";
import { inject, observer } from "mobx-react";
import { RouterView } from "mobx-state-router";
import { RootStore } from "../stores/RootStore";

import { HomePage } from "./pages/HomePage";
import { UsersPage } from "./pages/UsersPage";
import { NotFoundPage } from "./pages/NotFoundPage";

const viewMap = {
	home: <HomePage/>,
	users: <UsersPage/>,
	notFound: <NotFoundPage/>,
};

interface IProps {
};

interface InjectedProps extends IProps {
	rootStore: RootStore
};

@inject("rootStore")
@observer
export class Shell extends React.Component {

	get injected(): InjectedProps {
		return this.props as InjectedProps;
	}

	render() {
		const { rootStore } = this.injected;
		return (
			<RouterView routerStore={rootStore.routerStore} viewMap={viewMap}/>
		)
	}

}
