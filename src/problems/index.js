import React from "react";
import { Switch, Redirect, withRouter } from "react-router-dom";
import styles from "./main.module.less";

import { parseRoute } from "parseRoute";
import { routers } from "./router";
import List from "components/List";

const Main = props => {
	const { history, location } = props;
	const { pathname } = location;
	return (
		<div className={styles.main}>
			<div className={styles.menu}>
				{routers.map(item => (
					<List
						selected={pathname === item.path}
						key={item.path}
						{...item}
						history={history}
					></List>
				))}
			</div>
			<div className={styles.body}>
				<Switch>
					{parseRoute(routers)}
					<Redirect to={routers[0].path} />
				</Switch>
			</div>
		</div>
	);
};

export default withRouter(Main);
