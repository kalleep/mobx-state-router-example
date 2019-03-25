import * as React from "react";

import { observer } from "mobx-react";

import { Shell } from "./Shell";

@observer
export class App extends React.Component {

	render() {
		return(
			<Shell/>
		);
	}
}