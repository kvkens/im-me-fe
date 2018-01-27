import React, { Component } from 'react';
import { Link } from "mirrorx";
import './index.less';

export default class App extends Component {
	render() {
		return (
			<div className="index">
				<div className="index-header">
					<h3 className="index-title">
						<Link to="/">智能制造</Link>
					</h3>
					<ul className="index-main">
						{/* 生产基础数据路由 */}
						<li className="index-main-li">
							<h3>生产基础数据</h3>
							<ul className="index-ul">
								<li className="index-li">
									<Link to="/bdm/user">默认测试</Link>
								</li>
							</ul>
						</li>
						{/* 能源管理路由 */}
						<li className="index-main-li">
							<h3>能源管理</h3>
							<ul className="index-ul">
								
							</ul>
						</li>
						{/* 工业物联平台路由 */}
						<li className="index-main-li">
							<h3>工业物联平台</h3>
							<ul className="index-ul">
								
							</ul>
						</li>
						{/* 生产智能路由 */}
						<li className="index-main-li">
							<h3>生产智能监视</h3>
							<ul className="index-ul">
								
							</ul>
						</li>
						{/* 生产巡检路由 */}
						<li className="index-main-li">
							<h3>生产巡检管理</h3>
							<ul className="index-ul">
								
							</ul>
						</li>
						{/* 异常事件路由 */}
						<li className="index-main-li">
							<h3>异常事件管理</h3>
							<ul className="index-ul">
								
							</ul>
						</li>
						{/* 辅助调度路由 */}
						<li className="index-main-li">
							<h3>辅助调度管理</h3>
							<ul className="index-ul">
								
							</ul>
						</li>
						{/* 生产计划路由 */}
						<li className="index-main-li">
							<h3>生产计划管理</h3>
							<ul className="index-ul">
								
							</ul>
						</li>
						{/* 车间作业路由 */}
						<li className="index-main-li">
							<h3>车间作业管理</h3>
							<ul className="index-ul">
								
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
