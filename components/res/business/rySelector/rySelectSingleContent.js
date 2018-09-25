/**
 * Created by Administrator on 2018/5/18.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import Card from "../../../card";
import Scroll from "../../../customScroll";
import Search from "../../../search";
import Icon from '../../../icon'
import QueryList from "./queryList";
import RyTree from "./ryTree";
import {loginUser} from "rj-lib/user";
import {userSelect} from "./api";
import "./style/index.less";

const userInfo = loginUser();
const latelyContactorsSize = 20;    //最多存储最近联系人个数


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

function onPressEnterSearch(e) {
    let str = e.target.value;
    this.setState({searchValue: str});
    if (str !== "") {
        fetchTableData.call(this, {
            str,
            current: this.state.pagination.current,
            pageSize: this.state.pagination.pageSize
        });
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
}

function onOkModal(selectedRys) {
    let latelyContactors = selectedRys.concat();
    if (latelyContactors.length > latelyContactorsSize) {
        latelyContactors.splice(latelyContactorsSize);
        window.localStorage.setItem("latelyContactors", JSON.stringify(latelyContactors));
    } else {
        let data = JSON.parse(localStorage.getItem("latelyContactors"));
        if (data) {
            for (let item of data) {
                if (latelyContactors.length > latelyContactorsSize - 1) {
                    break;
                }
                let ts = latelyContactors.filter(contactor => contactor.username === item.username);
                if (ts.length === 0) {
                    latelyContactors.push(item);
                }
            }

        }
        window.localStorage.setItem("latelyContactors", JSON.stringify(latelyContactors));
    }

    this.props.onSelect && this.props.onSelect(selectedRys);
}


function onClickList(id, username, nickname, rybs, orgName, departmentName, fyfjm, bmbs) {
    onClickSearchClear.call(this);
    onOkModal.call(this, [{id, username, nickname, rybs, orgName, departmentName, fyfjm, bmbs}]);
}


class RySelectSingleContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
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

    render() {

        const stylePrefix = 'rj-rySelector';
        return (
            <div>
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
                              bodyStyle={{padding: '0 0 0 10px'}}
                        >
                            <Scroll style={{height: 588}}>
                                <RyTree
                                    userRange={this.props.userRange}
                                    checkable={false}
                                    onChange={ selectedRys => onOkModal.call(this, selectedRys) }
                                />
                            </Scroll>
                        </Card>
                        :
                        <div style={{marginTop: 10}}>
                            <QueryList dataSource={this.state.tableData}
                                       pagination={this.state.pagination}
                                       onClick={ item => onClickList.call(this, item.id, item.username, item.nickname, item.rybs, item.orgName, item.departmentName, item.fyfjm, item.bmbs)}
                            />
                        </div>

                }
            </div>
        )
    }

}

RySelectSingleContent.propTypes = {
    userRange: PropTypes.number,
    onSelect: PropTypes.func.isRequired,
};

RySelectSingleContent.defaultProps = {
    userRange: 3,
};

export default RySelectSingleContent;