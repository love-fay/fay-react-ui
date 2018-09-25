/**
 * Created by Administrator on 2018/5/24.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import {loginUser} from "rj-lib/user";
import {userSelect} from './api';
import "./style/index.less";
import ToggleBox from './toggleBox'
import SelectedInput from './selectedInput';
import QueryList from "./queryList";
import LatelyContactorsBox from "./latelyContactorsBox";

const userInfo = loginUser();
const latelyContactorsSize = 20;    //最多存储最近联系人个数

/**
 * 增加选中人员
 * @param rys
 */
function addSelectedRys(rys) {
    const selectedRys = this.selectedRys;
    if (!this.props.multiple) {
        if (selectedRys.length > 0) {
            return;
        }
    }
    let newRys = rys.filter(ryItem => selectedRys.filter(selectedRyItem => selectedRyItem.username == ryItem.username).length == 0);
    newRys.map(newRyItem => selectedRys.push(newRyItem));
    this.props.onChange(selectedRys);
}

/**
 * 取消选中人员
 * @param rys
 */
function cancelSelectedRys(rys) {
    const selectedRys = this.selectedRys;
    let newSelectedRys = selectedRys.filter(selectedRyItem => rys.filter(ryItem => ryItem.username == selectedRyItem.username).length == 0);
    this.props.onChange(newSelectedRys);
}

function onBackspaceSelectedInput() {
    const selectedRys = this.selectedRys;
    selectedRys.pop();
    this.props.onChange(selectedRys);
}

/**
 * 关闭输入框中的标签
 * @param username
 */
function onCloseSelectedInput(username) {
    cancelSelectedRys.call(this, [{username}]);
}


/**
 * 根据输入框中的输入进行搜索
 * @param str
 */
function onChangeSearch(str) {
    this.setState({searchValue: str});
    if (str != "") {
        fetchTableData.call(this, {
            str,
            current: this.state.pagination.current,
            pageSize: this.state.pagination.pageSize
        });
    }
    ;
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

function onClickList(id, username, nickname, rybs, orgName, departmentName, fyfjm, bmbs) {
    addSelectedRys.call(this, [{id, username, rybs, nickname, orgName, departmentName, fyfjm, bmbs}]);
    this.setState({searchValue: ""});
}


export default class RySelectInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: [],    //下拉列表数据
            pagination: {
                size: "small",
                showTotal: (total, range) => `总计 ${total} 条`,
                current: 1,
                pageSize: 10,
                total: 0,
                onChange: (current, pageSize) => fetchTableData.call(this, {
                    str: this.state.searchValue,
                    current,
                    pageSize
                })
            },
            searchValue: "",    //搜索框输入
            visibaleToggleBox: false   //下拉框显示隐藏
        };
        this.selectedRys = [];
        this.clickBox = false;
    }

    componentDidMount() {
        document.addEventListener("click", this.hide);
    }


    componentWillUnmount() {
        document.removeEventListener("click", this.hide);
        // this.card.removeEventListener("click",this.stopPropagation);
    }

    hide = () => {
        if (!this.clickBox) {
            this.setState({visibaleToggleBox: false});

            /**------------------------------------保存最近联系人 start------------------------------------------**/
            const selectedRys = this.selectedRys;
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
            /**------------------------------------保存最近联系人 end------------------------------------------**/
        }
        this.clickBox = false;

    }

    onClickBox = (event) => {
        // event = event || window.event;
        // event.nativeEvent.stopImmediatePropagation();
        this.clickBox = true;
        this.setState({visibaleToggleBox: true});
        this.box.querySelector('.rj-rySelector-queryInput-input').focus();
    }

    render() {
        this.selectedRys = this.props.selectedRys ? this.props.selectedRys.concat() : this.props.defaultSelectedRys.concat();
        const stylePrefix = 'rj-rySelector-rySelectInput';
        return (
            <div
                className={stylePrefix}
                ref={node => this.box = node}
                onClick={this.onClickBox}
            >
                <SelectedInput
                    value={this.state.searchValue}
                    selectedRys={this.selectedRys}
                    width={this.props.inputWidth}
                    onChange={str => onChangeSearch.call(this, str)}
                    onClose={(username) => onCloseSelectedInput.call(this, username)}
                    onBackspace={() => onBackspaceSelectedInput.call(this)}

                />
                <div className="tBox">
                    <ToggleBox visibale={this.state.visibaleToggleBox}>
                        {
                            this.state.searchValue === "" ?
                                <LatelyContactorsBox
                                    selectedRys={this.selectedRys}
                                    multiple={this.props.multiple}
                                    onChange={this.props.onChange}
                                />
                                :
                                <QueryList dataSource={this.state.tableData}
                                           pagination={this.state.pagination}
                                           onClick={ item => onClickList.call(this, item.id, item.username, item.nickname, item.rybs, item.orgName, item.departmentName, item.fyfjm, item.bmbs)}
                                />

                        }
                    </ToggleBox>
                </div>
            </div>
        )
    }

}

RySelectInput.propTypes = {
    defaultSelectedRys: PropTypes.array,
    selectedRys: PropTypes.array,
    userRange: PropTypes.number,
    multiple: PropTypes.bool,
    inputWidth: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

RySelectInput.defaultProps = {
    defaultSelectedRys: [],
    userRange: 3,
    multiple: true,
    inputWidth: 274
}