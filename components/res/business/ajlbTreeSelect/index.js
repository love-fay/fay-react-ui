import React, { Component } from 'react';
import TreeSelect from '../../../tree-select';
import ajlbData from './ajlbData';
import PropTypes from 'prop-types';

class AjlbTreeSelect extends Component {

    constructor(props){
        super(props);
        this.state = {
            map: new Map()
        }
    }

    filterSelectNode=(value,node)=>{
        return node.props.title.indexOf(value)>-1;
    };

    onChange = (value,label,extra)=>{
        let {map} = this.state;
        if(this.props.multiple && extra.clear){
            map.delete(value);
        }else{
            const {triggerValue} = extra;
            const {ajlb, spcx} = extra.triggerNode.props;
            map.set(triggerValue, {value: triggerValue, ajlb, spcx});
        }
        this.setState({map});
        this.props.onChange(value, label, map);
    };

    render() {
        const expandedKeys = [];
        const {style={width:300}, multiple, value,defAjlb} = this.props;
        let treeData = ajlbData.data;
        defAjlb && (treeData = treeData.filter(item => Object.is(JSON.stringify(item), JSON.stringify({...item, ...defAjlb}))));
        return (
            <TreeSelect
                style={style}
                value={value}
                onChange={this.onChange}
                dropdownStyle={{maxHeight:300,overflow:'auto'}}
                treeData={treeData}
                placeholder="请选择"
                treeDefaultExpandedKeys={expandedKeys}
                multiple={multiple}
                filterTreeNode={this.filterSelectNode}
            >
            </TreeSelect>
        );
    }
}

AjlbTreeSelect.propTypes = {
    style: PropTypes.object,
    defAjlb:PropTypes.object,
    multiple: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ])
};

export default AjlbTreeSelect;
