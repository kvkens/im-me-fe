/*
* bdm模块路由表
* */
import React from "react";
import { Route,Link } from "mirrorx";
import User from './containers/User';


const Routers = ({ match }) => (
	<div>
		<Route exact path={match.url} render={() => (
            <h3>请选择一个菜单</h3>
        )}/>
        <Route path={`${match.url}/user`} component={User}/>
	</div>
);

export default Routers;