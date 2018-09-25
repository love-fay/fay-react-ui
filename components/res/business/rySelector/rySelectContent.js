/**
 * Created by Administrator on 2018/5/18.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import Row from "../../../row";
import Col from "../../../col";
import Card from "../../../card";
import Button from '../../../button'
import Search from "../../../search";
import Icon from '../../../icon'
import RyTree from "./ryTree";
import SelectedList from "./selectedList";
import QueryList from "./queryList";
import {loginUser} from "rj-lib/user";
import {userSelect} from "./api";
import "./style/index.less";

const stylePrefix = 'rj-rySelector';
const userInfo = loginUser();
const latelyContactorsSize = 20;    //最多存储最近联系人个数

function onCloseSelectedList(username) {
    const {selectedRys} = this.state;
    let newSelectedRys = selectedRys.filter(item => item.username != username);
    this.setState({
        selectedRys: newSelectedRys,
    });
}

function onClickSearchClear() {
    const {pagination} = this.state;
    pagination.current = 1;
    pagination.pageSize = 10;
    pagination.total = 0;
    this.setState({
        tableData: [],
        pagination,
        searchValue: ''
    })
}

function onChangeSearch(str) {
    if (str !== "") {
        fetchTableData.call(this, {
            str,
            current: this.state.pagination.current,
            pageSize: this.state.pagination.pageSize
        });
    } else {
        const {pagination} = this.state;
        pagination.current = 1;
        pagination.pageSize = 10;
        pagination.total = 0;
        this.setState({
            tableData: [],
            pagination
        })
    }
}


function fetchTableData({str, current, pageSize}) {
    const {userRange} = this.props;
    let currentPage = current - 1;
    let fyfjm = parseInt(userRange) === 3 && userInfo ? userInfo.fyfjm : "";
    let params = {
        queryStr: str,
        page: currentPage,
        size: pageSize,
        fyfjm: fyfjm
    };
    userSelect.findUserDTOPage(params).then((res) => res.json())
        .then((res) => {
            if (res.code === "success" && res.data) {
                const {pagination} = this.state;
                pagination.current = current;
                pagination.pageSize = pageSize;
                pagination.total = res.data.totalElements;
                let arr = [];
                res.data.content.forEach(function (item) {
                    arr.push({
                        id: item.userid,
                        username: item.username,
                        value: item.username,
                        nickname: item.nickname,
                        label: item.nickname,
                        phone: item.phone,
                        zj: item.zj,
                        zw: item.zw,
                        rybs: item.rybs,
                        orgName: item.orgName,
                        departmentName: item.departmentName,
                        dfsId: item.dfsId,
                        departmentInfo: `${item.departmentName ? item.departmentName : ""} / ${item.orgName ? item.orgName : null}`,
                        fyfjm: item.fyfjm,
                        bmbs: item.bmbs
                    });
                });
                this.setState({tableData: arr, pagination});
            }
        });
};


function onClickList(id, username, nickname,rybs, orgName, departmentName, fyfjm, bmbs) {
    onClickSearchClear.call(this);
    const {selectedRys} = this.state;
    let filterData = selectedRys.filter(item => item.username == username);
    if (filterData.length == 0) {
        selectedRys.push({id, username, nickname,rybs, orgName, departmentName, fyfjm, bmbs});
        this.setState({selectedRys});
    }
}

function onOkModal(selectedRys, onOk, onCancel) {
    let latelyContactors = selectedRys.concat();
    if (latelyContactors.length > latelyContactorsSize) {
        latelyContactors.splice(latelyContactorsSize);
        localStorage.setItem("latelyContactors", JSON.stringify(latelyContactors));
    } else {
        let data = JSON.parse(localStorage.getItem("latelyContactors"));
        if (data) {
            for (let item of data) {
                if (latelyContactors.length > latelyContactorsSize - 1) {
                    break;
                }
                let ts = latelyContactors.filter(contactor => contactor.username == item.username);
                if (ts.length == 0) {
                    latelyContactors.push(item);
                }
            }

        }
        localStorage.setItem("latelyContactors", JSON.stringify(latelyContactors));
    }
    onOk(selectedRys);
    onCancel();
}


class RySelectContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRys: [],
            tableData: [],
            pagination: {
                size: "small",
                showTotal: (total, range) => `总计 ${total} 条`,
                current: 1,
                pageSize: 14,
                total: 0,
                onChange: (current, pageSize) => fetchTableData.call(this, {
                    str: this.state.searchValue,
                    current,
                    pageSize
                })
            },
            searchValue: "",
        };
    }

    componentDidMount() {
        if (this.props.defaultSelectedRys) {
            this.setState({
                selectedRys: this.props.defaultSelectedRys.concat(),
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.defaultSelectedRys && this.props.defaultSelectedRys) {
            if (nextProps.defaultSelectedRys.filter(nextPropsItem => this.props.defaultSelectedRys.filter(thisPropsItem =>thisPropsItem.username == nextPropsItem.username).length == 0).length > 0
                || nextProps.defaultSelectedRys.length != this.props.defaultSelectedRys.length) {
                this.setState({selectedRys: nextProps.defaultSelectedRys.concat()});
            }
        }
    }

    render() {

        return (
            <div>
                <Row gutter={32}>
                    <Col span={16}>
                        <Search
                            placeholder="输入关键字搜索"
                            suffix={this.state.searchValue !== '' ? <Icon
                                type="close-circle"
                                onClick={()=> onClickSearchClear.call(this) }
                            /> : null}
                            value={this.state.searchValue}
                            onChange={ e => this.setState({searchValue: e.target.value})}
                            onDelayChange={value => onChangeSearch.call(this, value) }
                        />
                        {
                            this.state.searchValue === "" ?
                                <Card style={{marginTop: 10}}
                                      bodyStyle={{overflowY: "auto", height: 588}}
                                >
                                    <RyTree
                                        userRange={this.props.userRange}
                                        selectedRys={this.state.selectedRys}
                                        onChange={ selectedRys => this.setState({selectedRys}) }
                                    />
                                </Card>
                                :
                                <div style={{marginTop: 10}}>
                                    <QueryList dataSource={this.state.tableData}
                                               pagination={this.state.pagination}
                                               onClick={ item => onClickList.call(this, item.id, item.username, item.nickname, item.rybs, item.orgName, item.departmentName, item.fyfjm, item.bmbs)}
                                    />
                                </div>

                        }

                    </Col>
                    <Col span={8}>
                        <Card title="已选人员"
                              extra={<a href="javascript:;"
                                        onClick={() => this.setState({selectedRys: []})}>清空</a>}
                              className={stylePrefix + '-card'}
                              bodyStyle={{overflowY: "auto", height: 600, padding: 0}}
                        >
                            <SelectedList selectedRys={this.state.selectedRys}
                                          onClose={(username) => onCloseSelectedList.call(this, username)}
                            />
                        </Card>
                    </Col>
                </Row>
                <div style={{
                    textAlign: 'right',
                    marginTop: 16
                }}>
                    <Button
                        style={{marginRight: 16}}
                        onClick={this.props.onCancel}
                    >
                        取消
                    </Button>
                    <Button
                        type="primary"
                        onClick={() => onOkModal.call(this, this.state.selectedRys, this.props.onOk, this.props.onCancel)}
                    >
                        确定
                    </Button>
                </div>
            </div>

        )
    }

}

RySelectContent.propTypes = {
    defaultSelectedRys: PropTypes.array,
    userRange: PropTypes.number,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
}

RySelectContent.defaultProps = {
    userRange: 3,
}

export default RySelectContent;