import React, {Component} from 'react';
import Table from 'rjd/table';
import Divider from 'rjd/divider';
import {user} from '../../../../fetch';

const columns = [{
    title: '',
    fixed: 'left',
    width: 160,
    // rowSpan: 4,
    render: () => (
        <span>
            提及管辖案件小计
        </span>
    ),
},{
    title: '旧存',
    // dataIndex: 'id',
    // width: 160,
    children: [{
        title: '1',
        onHeaderCell: (column) => {
            column.rowSpan = 1;
            console.log(column);
        }
    }]
}, {
    title: '收案',
    // dataIndex: 'name',
    // width: 160,
    children: [{
        title: '2'
    }]
}, {
    title: '收案来源',
    // rowSpan: 4,
    // dataIndex: 'email',
    children: [
        {
            title: '本院依职权',
            // rowSpan: 3,
            children: [{
                title: '3',
                // rowSpan: 1,
            }]
        },
        {
            title: '下级法院报请',
            // rowSpan: 3,
            children: [{
                title: '4',
                // rowSpan: 1,
            }]
        },{
            title: '当事人请求监督',
            // rowSpan: 3,
            children: [{
                title: '5',
                // rowSpan: 1,
            }]
        },{
            title: '当事人上诉',
            // rowSpan: 3,
            children: [{
                title: '6',
                // rowSpan: 1,
            }]
        },{
            title: '其他法院商请',
            // rowSpan: 3,
            children: [{
                title: '7',
                // rowSpan: 1,
            }]
        },{
            title: '本院商请',
            // rowSpan: 3,
            children: [{
                title: '8',
                // rowSpan: 1,
            }]
        }
    ]
// }, {
//     title: '结案',
//     rowSpan: 3,
//     children: [{
//         title: '9',
//         rowSpan: 1,
//     }]
// }, {
//     title: '结案方式',
//     rowSpan: 1,
//     // dataIndex: 'address',
//     children: [{
//         title: '指定与提级',
//         rowSpan: 1,
//         children: [{
//             title: '本院提级（含同意移送本院）',
//             rowSpan: 2,
//             children: [{
//                 title: '10',
//                 rowSpan: 1,
//             }]
//         }, {
//             title: '本院不同意提级（含不同意移送本院）',
//             rowSpan: 2,
//             children: [{
//                 title: '11',
//                 rowSpan: 1,
//             }]
//         }, {
//             title: '指定报请法院管辖',
//             rowSpan: 2,
//             children: [{
//                 title: '12',
//                 rowSpan: 1,
//             }]
//         }, {
//             title: '本院指定其他法院管辖',
//             rowSpan: 2,
//             children: [{
//                 title: '13',
//                 rowSpan: 1,
//             }]
//         }]
//     },{
//         title: '管辖上诉',
//         rowSpan: 1,
//         children: [{
//             title: '维持原裁定',
//             rowSpan: 2,
//             children: [{
//                 title: '14',
//                 rowSpan: 1,
//             }]
//         }, {
//             title: '撤销原裁定并驳回管辖异议',
//             rowSpan: 2,
//             children: [{
//                 title: '15',
//                 rowSpan: 1,
//             }]
//         }, {
//             title: '撤销原裁定并裁定移送其他法院管辖',
//             rowSpan: 2,
//             children: [{
//                 title: '16',
//                 rowSpan: 1,
//             }]
//         },{
//             title: '按撤回上诉处理',
//             rowSpan: 2,
//             children: [{
//                 title: '17',
//                 rowSpan: 1,
//             }]
//         },{
//             title: '准予撤回上诉',
//             rowSpan: 2,
//             children: [{
//                 title: '18',
//                 rowSpan: 1,
//             }]
//         },{
//             title: '终结',
//             rowSpan: 2,
//             children: [{
//                 title: '19',
//                 rowSpan: 1,
//             }]
//         }]
//     },{
//         title: '管辖协商',
//         rowSpan: 1,
//         children: [{
//             title: '由对方下级法院管辖',
//             rowSpan: 2,
//             children: [{
//                 title: '20',
//                 rowSpan: 1,
//             }]
//         },{
//             title: '由本院下级法院管辖',
//             rowSpan: 2,
//             children: [{
//                 title: '21',
//                 rowSpan: 1,
//             }]
//         },{
//             title: '报请最高院指定',
//             rowSpan: 2,
//             children: [{
//                 title: '22',
//                 rowSpan: 1,
//             }]
//         }]
//     },{
//         title: '移交审批',
//         rowSpan: 1,
//         children: [{
//             title: '批准下交审理',
//             rowSpan: 2,
//             children: [{
//                 title: '23',
//                 rowSpan: 1,
//             }]
//         },{
//             title: '不批准下交审理',
//             rowSpan: 2,
//             children: [{
//                 title: '24',
//                 rowSpan: 1,
//             }]
//         }]
//     },{
//         title: '管辖监督',
//         rowSpan: 1,
//         children: [{
//             title: '撤销原裁定并裁定移送有管辖权法院审理',
//             rowSpan: 2,
//             children: [{
//                 title: '25',
//                 rowSpan: 1,
//             }]
//         },{
//             title: '裁定下级法院将案件移送有管辖权法院审理',
//             rowSpan: 2,
//             children: [{
//                 title: '26',
//                 rowSpan: 1,
//             }]
//         }]
//     }]
// }, {
//     title: '未结',
//     rowSpan: 3,
//     // width: 160,
//     children: [{
//         title: '27',
//         rowSpan: 1,
//     }]
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
        user.findUsers(res => this.fetchCb(res));
    };

    componentDidMount() {
        this.fetch();
    }

    render() {
        return (
            <Table columns={columns}
                   bordered
                   rowKey={record => record.id}
                   dataSource={this.state.data}
                   pagination={this.state.pagination}
                   loading={this.state.loading}
                   onChange={this.handleTableChange}
                   scroll={{ x: '130%', y: 300 }}
            />
        );
    }
}

export default UserTable;