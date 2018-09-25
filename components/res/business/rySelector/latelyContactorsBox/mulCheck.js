/**
 * Created by Administrator on 2018/8/13.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import Checkbox from "../../../../checkbox";

const stylePrefix = 'rj-rySelector-latelyContactorsBox';
const CheckboxGroup = Checkbox.Group;

function onCheckAllChange(e, latelyContactors) {
    this.setState({
        indeterminate: false,
        checkAll: e.target.checked
    })
    const {selectedRys} = this.props;
    if (e.target.checked) {
        let newRys = latelyContactors.filter(ryItem => selectedRys.findIndex(selectedRyItem => selectedRyItem.username === ryItem.username) < 0);
        this.props.onChange(selectedRys.concat(newRys));
    } else {
        let filter = selectedRys.filter(selectedRyItem => latelyContactors.findIndex(ryItem => ryItem.username === selectedRyItem.username) < 0);
        this.props.onChange(filter);
    }
}

function onChangeGroup(checkedList, latelyContactors) {
    this.setState({
        indeterminate: !!checkedList.length && (checkedList.length < latelyContactors.length),
        checkAll: checkedList.length === latelyContactors.length
    })
    const {selectedRys} = this.props;
    let newCheckeds = checkedList.filter(checkedListItem => selectedRys.filter(selectedRyItem => selectedRyItem.username == checkedListItem).length == 0);
    let addRys = latelyContactors.filter(item => newCheckeds.includes(item.username));
    if (addRys.length > 0) {
        let newRys = addRys.filter(ryItem => selectedRys.findIndex(selectedRyItem => selectedRyItem.username === ryItem.username) < 0);
        this.props.onChange(selectedRys.concat(newRys));
    }
    let cancelRys = latelyContactors.filter(item => selectedRys.filter(selectedRyItem => selectedRyItem.username == item.username).length > 0).filter(item => !checkedList.includes(item.username));
    if (cancelRys.length > 0) {
        let filter = selectedRys.filter(selectedRyItem => cancelRys.findIndex(ryItem => ryItem.username === selectedRyItem.username) < 0);
        this.props.onChange(filter);
    }
}

function iniState({selectedRys}){
    this.latelyContactors = JSON.parse(localStorage.getItem("latelyContactors"));
    if (this.latelyContactors) {
        let length = this.latelyContactors.filter(ryItem => selectedRys.findIndex(selectedRyItem => selectedRyItem.username === ryItem.username) < 0).length;
        if (length === this.latelyContactors.length) {
            this.setState({
                checkAll: false,
                indeterminate: false
            })
        } else if (length > 0) {
            this.setState({
                checkAll: false,
                indeterminate: true
            })
        } else {
            this.setState({checkAll: true})
        }
    }
}

const CheckboxDiv = ({value, label}) => {
    return (
        <div className={stylePrefix + '-checkbox'}>
            <Checkbox value={value}><span className="textOverflow" title={label}>{label}</span></Checkbox>
        </div>
    )
}

class MulCheck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            indeterminate: false,
            checkAll: false
        }
        this.latelyContactors = undefined;
    }

    componentWillMount() {
        iniState.call(this,this.props);
    }

    componentWillReceiveProps(nextProps){
        iniState.call(this,nextProps);
    }

    render() {
        const {selectedRys} = this.props;
        let options = [];
        let checkedValues = [];
        if (this.latelyContactors) {
            options = this.latelyContactors.map(item => {
                if (selectedRys.filter(selectedRyItem => selectedRyItem.username == item.username).length > 0) {
                    checkedValues.push(item.username);
                }
                return ({
                    label: item.nickname,
                    value: item.username,
                });
            });
        }

        return (
            <div>
                <div>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={ e => onCheckAllChange.call(this, e, this.latelyContactors)}
                        checked={this.state.checkAll}
                    >
                        <span style={{fontWeight: "bold"}}>最近使用</span>
                    </Checkbox>
                </div>
                <div>
                    <CheckboxGroup value={checkedValues}
                                   onChange={ checkedList => onChangeGroup.call(this, checkedList, this.latelyContactors) }>
                        {
                            options.map((item) => {
                                return <CheckboxDiv key={item.value}
                                                    value={item.value}
                                                    label={item.label}
                                />
                            })
                        }
                    </CheckboxGroup>
                </div>
            </div>
        )
    }
}

MulCheck.propTypes = {
    selectedRys: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
}

export default MulCheck;