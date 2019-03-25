import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "mobx-react";
import { HistoryAdapter } from "mobx-state-router";

import { createBrowserHistory } from "history";

import { RootStore } from "./stores/RootStore";

const rootStore = new RootStore();

const history = createBrowserHistory();

const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

import { App } from "./components/App";

ReactDOM.render(
	<Provider rootStore={rootStore}>
		<App/>
	</Provider>,
	document.getElementById("root")
);