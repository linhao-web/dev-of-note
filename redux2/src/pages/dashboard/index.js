import React from 'react';
import {ReactSortable} from "react-sortablejs";
import cx from 'classnames'
import {Popover} from 'antd'

import update from 'immutability-helper'

import {ICON_FONT_URL} from '@config'
import {createFromIconfontCN} from "@ant-design/icons";
import ModalInfo from '@components/modalInfo'
import BaseComponent from '@components/BaseComponent'

import './index.less'

const IconFont = createFromIconfontCN({
	scriptUrl: ICON_FONT_URL,
});



class Dashboard extends BaseComponent {
	state = {
		//看板列表
		groupList: [],
		creatDashboardVisible: false,//创建看板弹窗
	};
	componentDidMount() {
		//todo 参考数据
		const groupData = {"code":0,"msg":"操作成功","times":null,"datas":[{"id":50088,"userId":1049888,"appId":null,"name":"默认分组","type":0,"orderNum":1,"createTime":1604644903000,"updateTime":1604644903000,"panelList":[{"id":1973,"userId":1049888,"groupId":50088,"panelId":1973,"name":"理财用户使用机型排名","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":10,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1965,"userId":1049888,"groupId":50088,"panelId":1965,"name":"资金到账-转账的转化率","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":9,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1966,"userId":1049888,"groupId":50088,"panelId":1966,"name":"活跃用户使用机型排名","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":8,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1963,"userId":1049888,"groupId":50088,"panelId":1963,"name":"各平台注册转化漏斗(1)","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":7,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1969,"userId":1049888,"groupId":50088,"panelId":1969,"name":"注册转化率","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":6,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1962,"userId":1049888,"groupId":50088,"panelId":1962,"name":"各平台注册转化漏斗","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":5,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1971,"userId":1049888,"groupId":50088,"panelId":1971,"name":"活跃用户时段分布","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":4,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1970,"userId":1049888,"groupId":50088,"panelId":1970,"name":"登录失败用户占比","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":3,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1968,"userId":1049888,"groupId":50088,"panelId":1968,"name":"动账使用率","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":2,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0}]},{"id":53863,"userId":1049888,"appId":null,"name":"22222","type":1,"orderNum":3,"createTime":1608256275000,"updateTime":1608256281000,"panelList":[{"id":1964,"userId":1049888,"groupId":53863,"panelId":1964,"name":"资金到账用户数","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":12,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1972,"userId":1049888,"groupId":53863,"panelId":1972,"name":"转账用户留存分析","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":11,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1974,"userId":1049888,"groupId":53863,"panelId":1974,"name":"转账用户留存分析(1)","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":10,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1940,"userId":1049888,"groupId":53863,"panelId":1940,"name":"核心流程转化（副本）","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":9,"status":1,"createTime":null,"userName":null,"bookNums":8,"open":true,"read":true,"platform":null,"tips":null,"isPre":0},{"id":1040,"userId":0,"groupId":53863,"panelId":1040,"name":"基金理财分析","isShare":0,"sourceType":0,"source":0,"canOperated":0,"isFixed":1,"orderNum":8,"status":1,"createTime":null,"userName":null,"bookNums":8,"open":true,"read":true,"platform":null,"tips":null,"isPre":1},{"id":1039,"userId":0,"groupId":53863,"panelId":1039,"name":"用户画像分析","isShare":0,"sourceType":0,"source":0,"canOperated":0,"isFixed":1,"orderNum":7,"status":1,"createTime":null,"userName":null,"bookNums":8,"open":true,"read":true,"platform":null,"tips":null,"isPre":1},{"id":875,"userId":0,"groupId":53863,"panelId":875,"name":"基础业务指标","isShare":0,"sourceType":0,"source":0,"canOperated":0,"isFixed":1,"orderNum":6,"status":1,"createTime":null,"userName":null,"bookNums":8,"open":true,"read":true,"platform":null,"tips":null,"isPre":1},{"id":877,"userId":0,"groupId":53863,"panelId":877,"name":"运营数据指标","isShare":0,"sourceType":0,"source":0,"canOperated":0,"isFixed":1,"orderNum":5,"status":1,"createTime":null,"userName":null,"bookNums":10,"open":true,"read":true,"platform":null,"tips":null,"isPre":1},{"id":1042,"userId":0,"groupId":53863,"panelId":1042,"name":"核心流程转化","isShare":0,"sourceType":0,"source":0,"canOperated":0,"isFixed":1,"orderNum":4,"status":1,"createTime":null,"userName":null,"bookNums":10,"open":true,"read":true,"platform":null,"tips":null,"isPre":1},{"id":1041,"userId":0,"groupId":53863,"panelId":1041,"name":"动账业务分析","isShare":0,"sourceType":0,"source":0,"canOperated":0,"isFixed":1,"orderNum":3,"status":1,"createTime":null,"userName":null,"bookNums":11,"open":true,"read":true,"platform":null,"tips":null,"isPre":1},{"id":876,"userId":0,"groupId":53863,"panelId":876,"name":"产品体验指标","isShare":0,"sourceType":0,"source":0,"canOperated":0,"isFixed":1,"orderNum":2,"status":1,"createTime":null,"userName":null,"bookNums":7,"open":true,"read":true,"platform":null,"tips":null,"isPre":1}]},{"id":53922,"userId":1049888,"appId":null,"name":"222222222222222222222222222","type":1,"orderNum":4,"createTime":1608273206000,"updateTime":1608273446000,"panelList":[{"id":1967,"userId":1049888,"groupId":53922,"panelId":1967,"name":"理财产品购买分布","isShare":0,"sourceType":1,"source":1,"canOperated":1,"isFixed":1,"orderNum":2,"status":1,"createTime":null,"userName":null,"bookNums":1,"open":true,"read":true,"platform":null,"tips":null,"isPre":0}]},{"id":53901,"userId":1049888,"appId":null,"name":"3333","type":1,"orderNum":5,"createTime":1608265046000,"updateTime":1608265046000,"panelList":[]}],"exception":null,"uniqueId":"789508836468719616"};

		let groupList = groupData.datas.map(item => {
			//为组增加开关标识 增加空状态
			return {...item, open: 0, panelList: item.panelList.length ? item.panelList : [{ id: -1, name: '可将看板拖动到此处' }] }
		});


		this.setState({
			// groupList: groupList
			groupList: []
		}, () => {

			//读取缓存Id，如果没有缓存id，则使用第一个看板组中的第一个看板ID
			//如果没有看板，默认当前看板id；-1 且不请求看板详情
			const getFirstId = (arr, index) => {
				if (index > arr.length) {
					return -1
				}

				if (arr[index].panelList.length > 0) {
					return arr[index].panelList[0].id
				}

				getFirstId(arr, index + 1)
			};
			const currentId = getFirstId(groupList, 0);
			this.props.history.push({pathname: `/dashboard`, state:{id: currentId}});
		})
	}

	handleOpenGroup = key => () => {
		const { groupList } = this.state;
		let dragIndex = 0;
		//获取目标看板分组下标
		groupList.forEach((i, index) => {
			if (i.id === key) {
				dragIndex = index;
			}
		});

		//更新目标分组的看板分组数据
		const endState = update(groupList, {
			[dragIndex]: {
				$merge: { open: groupList[dragIndex].open === 0 ? 1 : 0  }
			}
		});

		this.setState({groupList: endState})
	};

	handleOpenMore = (e) => {
		console.log('click more');
		e.stopPropagation();
	};


	//分组拖动
	dragGroup = (newState) => {
		// console.log('dragGroup newState ===== ', newState);
		let endIndex = -1, endGroupIndex = -1, endState = newState;

		newState.forEach((item, index) => {
			// 看板组为一级拖动列表，看板列表为二级拖动列表，当拖动二级列表到一级列表时，将它放到一级列表的二级列表后面
			if (!item.panelList) {
				endIndex = index
			}
		});

		if (endIndex >= 0) {
			endState = update(newState, {
				$splice: [[endIndex, 1]],
				[endIndex - 1]: {
					panelList: { $push: [newState[endIndex]] }
				}
			});
		}

		//保持看板组在下，默认看板在上
		if (endState[0] && endState[0].type !== 0) {
			//查找默认看板当前位置，然后切割重新插入到首位
			endState.forEach((item, index) => {
				if (item.type === 0) {
					endGroupIndex = index
				}
			});

			if (endGroupIndex >= 0) {
				endState = update(endState, {
					$splice: [[endGroupIndex, 1]],
					$unshift: [endState[endGroupIndex]]
				});
			}
		}

		this.setState({
			groupList: endState
		})
	};
	//看板拖动
	dragItem = (newState, groupId) => {
		const { groupList } = this.state;
		let dragIndex = -1;
		//获取目标看板分组下标
		groupList.forEach((i, index) => {
			if (i.id === groupId) {
				dragIndex = index;
			}
		});

		let filterState = newState;
		if (newState.length >= 2) {
			filterState = newState.filter(f => f.id !== -1)
		}
		else if (newState.length === 0) {
			filterState = [{ id: -1, name: '可将看板拖动到此处' }]
		}

		//更新目标分组的看板分组数据
		const endState = update(groupList, {
			[dragIndex]: {
				$merge: { panelList: filterState }
			}
		});

		// console.log('dragItem newState ===== ', newState, groupId, dragIndex, filterState);
		// console.log('endState ===== ', endState);

		this.setState({
			groupList: endState
		})
	};
	showDashboardById = (id) => () => {
		if (id === -1) { return }
		this.props.history.push({pathname: `/dashboard`, state:{id}});
	};
	// createDashboard = () => {
	//
	// };
	createDashboard = () => {
		this.handleShowModal('creatDashboardVisible');
		// this.setState({creatDashboardVisible: true})
	};
	confirmCreateDashboard = () => {
		console.log('confirm创建看板')
	};

	render () {
		const ReactSortableOptions = {
			group: "panelList",
			animation: 200,
		};


		const currentDashboardId = this.props.location.state && this.props.location.state.id || -1;
		return (
			<div className="dashboard-page">
				<div className="flex-left">
					<div className="left-head">
						<span>所有看板</span>
						<Popover
							placement="rightTop"
							overlayClassName={'dashboard-tooltip create-dashboard-tooltip'}
							title=''
							content={<div>
								<div className="dashboard-item" onClick={this.createDashboard}><IconFont type="icontuichudenglu"/>创建看板</div>
								<div className="dashboard-item" onClick={this.createDashboard}><IconFont type="icontuichudenglu"/>创建看板分组</div>
							</div>}
							trigger="click"
							arrowPointAtCenter
						>
							<IconFont type="icontuichudenglu"/>
						</Popover>
					</div>
					<div className="left-content">
						{/*容器*/}
						<ReactSortable
							group={{
								name: 'panelList',
								pull: false,
								put: true,
							}}
							animation={200}
							delayOnTouchStart={true}
							list={this.state.groupList}
							setList={this.dragGroup}
						>
							{
								//遍历看板组
								this.state.groupList.map((group) => (
									<div key={group.id} className="group-item">
										{/*看板分组标题*/}
										{ //type：1用户分组
											group.type ? <div className="group-title" onClick={this.handleOpenGroup(group.id)}>
													<IconFont type="iconjiantou" className={cx('arrow', {'arrow-active': group.open})}/>
													<span className="name">{group.name}</span>
													<Popover
														placement="rightTop"
														title=''
														content={<div><p>hello</p><p>word</p></div>}
														trigger="click"
														arrowPointAtCenter
													>
														<div className='more-box' onClick={this.handleOpenMore}>
															<IconFont type="iconcaidan1" className='more'/>
														</div>
													</Popover>
												</div>
												//type：0为默认分组 不显示组名 且不可拖动
												: <div className="group-title" />
										}
										{/*看板列表*/}
										{
											group.type === 1
												? (
													<div>
														{
															group.open ? <ReactSortable
																	{...ReactSortableOptions}
																	key={group.id}
																	list={group.panelList}
																	className="dashboard-list"
																	setList={newState => this.dragItem(newState, group.id)}
																	delay={2}
																>
																	{
																		group.panelList.map(dashboard => {
																			return <div
																				key={dashboard.id}
																				className={cx('dashboard-item', {'dashboard-init': +dashboard.id === -1}, {'active': currentDashboardId === dashboard.id})}
																				onClick={this.showDashboardById(dashboard.id)}
																			>
																				{dashboard.name}
																			</div>
																		})
																	}
																</ReactSortable>
																: <div className="dashboard-item"/>
														}
													</div>
												)
												:	<ReactSortable
													className="dashboard-list"
													{...ReactSortableOptions}
													key={group.id}
													list={group.panelList}
													setList={newState => this.dragItem(newState, group.id)}
													delay={2}
												>
													{
														group.panelList.map(dashboard => {
															return <div key={dashboard.id} className={cx("dashboard-item", {'active': currentDashboardId === dashboard.id})}
																					onClick={this.showDashboardById(dashboard.id)}
															>
																{dashboard.id === -1 ? '' : dashboard.name}
															</div>
														})
													}
												</ReactSortable>
										}
									</div>
								))
							}
						</ReactSortable>
					</div>

					{/*todo 当前版本没有*/}
					{/*<div className="left-footer">
						<span>
							<IconFont type="icontuichudenglu"/><span>公共图表库</span>
						</span>
						<IconFont type="icontuichudenglu"/>
					</div>*/}
					{
						this.state.groupList.length ? null : <div className='group-empty'>
							<div style={{marginBottom: '6px'}}>你还没有任何看板</div>
							<div className="active" onClick={this.createDashboard}><IconFont type="icontuichudenglu"/>点击创建</div>
						</div>
					}
				</div>

				<div className="flex-right">
					{
						this.state.groupList.length ? null : <div className='group-empty'>请先创建一个看板</div>
					}
				</div>

				<ModalInfo
					title={'创建看板'}
					visible={this.state.creatDashboardVisible}
					visibleName='creatDashboardVisible'
					width={370}
					cancel={this.handleCancelModal}
					confirm={this.confirmCreateDashboard}
					cancelButtonProps={{
						ghost: true,
					}}
				>

				</ModalInfo>
			</div>
		)
	}
}


export default Dashboard
