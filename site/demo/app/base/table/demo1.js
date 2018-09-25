import React, {Component} from 'react';
import Table from 'rjd/table';
import Divider from 'rjd/divider';
import {user} from '../../../../fetch';

const columns = [{
    title: '序号',
    dataIndex: 'id',
    fixed: 'left',
    width: 160,
}, {
    title: '姓名',
    dataIndex: 'name',
    fixed: 'left',
    sorter: true,
    width: 160,
    render: name => <span style={{color: '#f5222d'}}>{name}</span>,
}, {
    title: '邮箱',
    dataIndex: 'email',
    filters: [
        { text: 'QQ邮箱', value: 'qq' },
        { text: 'RJ邮箱', value: 'rj' },
    ],
}, {
    title: '创建日期',
    dataIndex: 'createDate'
}, {
    title: '地址',
    dataIndex: 'address',
}, {
    title: '操作',
    key: 'action',
    fixed: 'right',
    width: 160,
    render: () => (
        <span>
            <a href='javascript:void(0)'>新增</a>
            <Divider type="vertical" />
            <a href='javascript:void(0)'>删除</a>
            <Divider type="vertical" />
            <a href='javascript:void(0)'>更新</a>
        </span>
    ),
}];

class UserTable extends Component{

    state = {
        data: [],
        pagination: {},
        loading: false,
    };

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager,
        });
        this.fetch({
            sortOrder: sorter.order,
            ...filters,
        });
    };

    fetchCb = res => {
        this.setState({
            loading: false,
            data: res.data.pageData,
        });
    };

    fetch = (params = {}) => {
        this.setState({ loading: true });
        const { sortOrder, email } = params;
        if(sortOrder === 'ascend'){
            if(email && email.length === 1){
                if(email[0] === 'qq'){
                    user.findUsersOrderByNameAscAndQQ(res => this.fetchCb(res));
                }else if(email[0] === 'rj'){
                    user.findUsersOrderByNameAscAndRJ(res => this.fetchCb(res));
                }
                return;
            }
            user.findUsersOrderByNameAsc(res => this.fetchCb(res));
        }else if(sortOrder === 'descend'){
            if(email && email.length === 1){
                if(email[0] === 'qq'){
                    user.findUsersOrderByNameDescAndQQ(res => this.fetchCb(res));
                }else if(email[0] === 'rj'){
                    user.findUsersOrderByNameDescAndRJ(res => this.fetchCb(res));
                }
                return;
            }
            user.findUsersOrderByNameDesc(res => this.fetchCb(res));
        }else{
            if(email && email.length === 1){
                if(email[0] === 'qq'){
                    user.findUsersByQQ(res => this.fetchCb(res));
                }else if(email[0] === 'rj'){
                    user.findUsersByRJ(res => this.fetchCb(res));
                }
                return;
            }
            user.findUsers(res => this.fetchCb(res));
        }
    };

    componentDidMount() {
        this.fetch();
    }

    render() {
        return (
            <Table columns={columns}
                   rowKey={record => record.id}
                   dataSource={this.state.data}
                   pagination={this.state.pagination}
                   loading={this.state.loading}
                   onChange={this.handleTableChange}
                   scroll={{ x: '130%' }}
            />
        );
    }
}

export default UserTable;