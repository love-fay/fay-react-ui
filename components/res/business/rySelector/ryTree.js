/**
 * 人员树
 * Created by Administrator on 2018/5/21.
 */
import React, {Component} from "react";
import PropTypes from 'prop-types';
import Tree from "../../../tree";
import message from '../../../message'
import Spin from '../../../spin'
import {userSelect} from './api';
import {loginUser} from "rj-lib/user";

const TreeNode = Tree.TreeNode;
const userInfo = loginUser();

function onCheckTree(nextCheckedKeys, e, selectedRys) {
    let changeNodes = [];
    switch (e.node.props['data-ref'].type) {
        case 'zjlxr':
            changeNodes = e.node.props.children;
            break;
        case 'court':
            for (let department of e.node.props.children.values()) {
                changeNodes = changeNodes.concat(department.props.children);
            }
            break;
        case 'department':
            changeNodes = e.node.props.children;
            break;
        case 'contactor':
            changeNodes.push(e.node);
            break;
        case 'person':
            changeNodes.push(e.node);
            break;
    }
    let selectedRysChange = [];
    changeNodes.map(item => {
        let filterData = selectedRysChange.filter(resItem => resItem.username == item.props['data-ref'].username);
        //去除重复
        if (filterData.length == 0) {
            let fyfjm, orgName, bmbs, departmentName;
            if (item.props['data-ref'].type === 'contactor') {
                fyfjm = item.props['data-ref'].fyfjm;
                orgName = item.props['data-ref'].orgName;
                bmbs = item.props['data-ref'].bmbs;
                departmentName = item.props['data-ref'].departmentName;
            } else if (item.props['data-ref'].type === 'person') {
                if (this.props.userRange == 1) {
                    fyfjm = item.props['data-ref'].parentNode['data-ref'].parentNode['data-ref'].fyfjm;
                    orgName = item.props['data-ref'].parentNode['data-ref'].parentNode['data-ref'].name;
                    bmbs = item.props['data-ref'].parentNode['data-ref'].bmbs;
                    departmentName = item.props['data-ref'].parentNode['data-ref'].name;
                } else if (this.props.userRange == 3) {
                    fyfjm = userInfo.fyfjm;
                    orgName = userInfo.fymc;
                    bmbs = item.props['data-ref'].parentNode['data-ref'].bmbs;
                    departmentName = item.props['data-ref'].parentNode['data-ref'].name;
                }
            }
            selectedRysChange.push({
                id: item.props['data-ref'].id,
                username: item.props['data-ref'].username,
                nickname: item.props['data-ref'].nickname,
                rybs: item.props['data-ref'].rybs,
                fyfjm,
                orgName,
                bmbs,
                departmentName
            });
        }
    });
    if (e.checked) {
        for (let item of selectedRysChange.values()) {
            if (selectedRys.findIndex(selectedRy => selectedRy.username === item.username) < 0) {
                selectedRys.push(item);
            }
        }
    } else {
        selectedRys = selectedRys.filter(selectedRy => selectedRysChange.findIndex(item => item.username === selectedRy.username) < 0);
    }
    this.props.onChange(selectedRys);
}

function onSelectTree(selectedKeys, e) {
    if (!this.props.checkable && e.node.props['data-ref'].type === 'person' || e.node.props['data-ref'].type === 'contactor') {
        let selectedRys = [];
        let fyfjm, orgName, bmbs, departmentName;
        let item = e.node;
        if (item.props['data-ref'].type === 'contactor') {
            fyfjm = item.props['data-ref'].fyfjm;
            orgName = item.props['data-ref'].orgName;
            bmbs = item.props['data-ref'].bmbs;
            departmentName = item.props['data-ref'].departmentName;
        } else if (item.props['data-ref'].type === 'person') {
            if (this.props.userRange == 1) {
                fyfjm = item.props['data-ref'].parentNode['data-ref'].parentNode['data-ref'].fyfjm;
                orgName = item.props['data-ref'].parentNode['data-ref'].parentNode['data-ref'].name;
                bmbs = item.props['data-ref'].parentNode['data-ref'].bmbs;
                departmentName = item.props['data-ref'].parentNode['data-ref'].name;
            } else if (this.props.userRange == 3) {
                fyfjm = userInfo.fyfjm;
                orgName = userInfo.fymc;
                bmbs = item.props['data-ref'].parentNode['data-ref'].bmbs;
                departmentName = item.props['data-ref'].parentNode['data-ref'].name;
            }
        }
        selectedRys.push({
            id: item.props['data-ref'].id,
            username: item.props['data-ref'].username,
            nickname: item.props['data-ref'].nickname,
            rybs: item.props['data-ref'].rybs,
            fyfjm,
            orgName,
            bmbs,
            departmentName,
        })
        ;
        this.props.onChange(selectedRys);
    }

};

function cacCheckedKeys(checkedKeys, treeData, userRange) {
    let [zjlxrData,...otherData] = treeData;
    let res = zjlxrData.children.filter(zjlxrItem => checkedKeys.includes(zjlxrItem.key.substring(10)));
    if (userRange === 1 || userRange === 2) {
        for (let jgItem of otherData.values()) {
            for (let department of jgItem.children.values()) {
                let filter = department.children.filter(personItem => checkedKeys.includes(personItem.key));
                if (filter.length > 0)res = res.concat(filter);
            }
        }
    } else {
        for (let department of otherData.values()) {
            let filter = department.children.filter(personItem => checkedKeys.includes(personItem.key));
            if (filter.length > 0)res = res.concat(filter);
        }
    }
    return res.map(item => item.key);
}

export default class RyTree extends Component {

    constructor(props) {
        super(props);
        this.state = {
            treeData: [{
                name: '最近使用',
                key: 'zjlxr',
                type: 'zjlxr',
                children: []
            }],
            loading: false
        };
        this.latelyContactorData = [];
        this.checkedKeys = [];
    }

    componentWillMount() {
        let latelyContactors = JSON.parse(localStorage.getItem("latelyContactors"));
        if (latelyContactors) {
            this.latelyContactorData = latelyContactors.map(item => {
                return ({
                    name: item.nickname,
                    key: 'contactor-' + item.username,
                    type: 'contactor',
                    isLeaf: true,
                    ...item
                });
            });
        }
        this.findParents();
    }

    onLoadData = (treeNode) => {
        return new Promise((resolve) => {
            this.findChildrens(treeNode);
            resolve();
        });
    }


    /**
     * 获取根结点数据
     * */
    findParents = ()=> {
        const {treeData} = this.state;
        if (this.props.userRange == 1 || this.props.userRange == 2) {
            this.setState({loading: true});
            userSelect.findOrgs(this.props.userRange).then((res) => res.json())
                .then((res) => {
                    if (res.code === "success" && res.data) {
                        res.data.forEach(function (item) {
                            treeData.push({
                                key: item.id,
                                type: 'court',
                                parentNode: null,
                                children: [],
                                ...item
                            });
                        });
                        this.setState({
                            treeData,
                            loading: false
                        });
                    }
                });
        } else {
            this.setState({loading: true});
            userSelect.findOrgByCurrentUser().then((res) => res.json())
                .then((res) => {
                    if (res.code === "success" && res.data) {
                        res.data.forEach(function (item) {
                            treeData.push({
                                key: item.id,
                                type: 'department',
                                parentNode: null,
                                children: [],
                                ...item
                            });

                        });
                        this.setState({
                            treeData,
                            loading: false
                        });
                    }
                });
        }
    }


    /**
     * 根据orgId获取用户节点信息
     * */
    findChildrens = (treeNode) => {
        let orgId = treeNode.props.eventKey;
        if (treeNode.props.children.length === 0) {
            if (orgId == 'zjlxr') {
                //最近联系人
                let latelyContactors = JSON.parse(localStorage.getItem("latelyContactors"));
                if (latelyContactors) {
                    treeNode.props['data-ref'].children = this.latelyContactorData;
                    const treeData = [...this.state.treeData];
                    this.setState({treeData});
                }
            } else if (treeNode.props['data-ref'].type == 'court') {
                userSelect.findTreeChildren(orgId).then((res) => res.json())
                    .then((res) => {
                        if (res.code = 'success' && res.data) {
                            let arr = [];
                            res.data.forEach(function (item) {
                                arr.push({
                                    key: item.id,
                                    type: 'department',
                                    parentNode: treeNode.props,
                                    children: [],
                                    ...item
                                });
                            });
                            treeNode.props['data-ref'].children = arr;
                            const treeData = [...this.state.treeData];
                            this.setState({treeData: treeData});
                        } else {
                            message.error('获取数据失败');
                        }
                    })
                    .catch((err) => {
                        throw err;
                    });
            } else {
                userSelect.findUsers(orgId).then((res) => res.json())
                    .then((res) => {
                        if (res.code = 'success' && res.data) {
                            let arr = [];
                            res.data.forEach(function (item) {
                                if (item.isAvailable === 1) {
                                    arr.push({
                                        name: item.nickname,
                                        key: item.username,
                                        type: 'person',
                                        parentNode: treeNode.props,
                                        isLeaf: true,
                                        ...item
                                    });
                                }
                            });
                            treeNode.props['data-ref'].children = arr;
                            const treeData = [...this.state.treeData];
                            this.setState({treeData});
                        } else {
                            message.error('获取数据失败');
                        }
                    })
                    .catch((err) => {
                        throw err;
                    });
            }
        }
    }


    render() {
        const stylePrefix = 'rjd-rySelector-ryTree';
        this.checkedKeys = cacCheckedKeys(this.props.selectedRys.map(item => item.username), this.state.treeData, this.props.userRange);
        const loop = (data, parentNode) => data.map((item) => {
            if (item.children) {
                return (
                    <TreeNode key={item.key}
                              title={item.name}
                              data-ref={item}
                    >
                        {loop(item.children, item)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key}
                             title={item.name}
                             data-ref={item}
                             isLeaf={item.isLeaf}
            />;
        });
        const treeNodes = loop(this.state.treeData, {parentNode: null});
        return (
            <div className={stylePrefix}>
                <Spin spinning={this.state.loading}>
                    <Tree
                        loadData={this.onLoadData}
                        checkable={this.props.checkable}
                        checkedKeys={this.checkedKeys}
                        onCheck={(nextCheckedKeys, e) => onCheckTree.call(this, nextCheckedKeys, e, this.props.selectedRys)}
                        onSelect={(selectedKeys, e) => onSelectTree.call(this, selectedKeys, e)}
                        className={stylePrefix + "-orgTree"}>
                        {treeNodes}
                    </Tree>
                </Spin>
            </div>
        );
    }
}

RyTree.propTypes = {
    selectedRys: PropTypes.array,
    checkable: PropTypes.bool,
    userRange: PropTypes.number,
    onChange: PropTypes.func.isRequired
};

RyTree.defaultProps = {
    selectedRys: [],
    userRange: 3,
    checkable: true
}