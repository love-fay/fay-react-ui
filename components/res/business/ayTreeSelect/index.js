import React, { Component } from 'react';
import TreeSelect from '../../../tree-select';
import data from './data';
import PropTypes from 'prop-types';

class AyTreeSelect extends Component {
   
    filterSelectNode=(value,node)=>{
        return node.props.title.indexOf(value)>-1;
    };
   
    filterData = (data,v)=>{
        return data.filter(item =>item.ajlb ===v);
    };

    render() {
        const expandedKeys = ['9000'];
        const {style={width:300},multiple,showSearch,onChange,value,defAy} = this.props;
        let treeData = data;
        if(defAy && defAy.ajlb && defAy.ajlb !== 'null'){
            treeData = [...this.filterData(data[0].children,defAy.ajlb)];
        }
        return (
            <TreeSelect
                style={style}
                value={value}
                onChange={onChange}
                dropdownStyle={{maxHeight:400,overflow:'auto'}}
                treeData={treeData}
                placeholder="请选择"
                treeDefaultExpandedKeys={expandedKeys}
                multiple={multiple}
                showSearch={showSearch}
                filterTreeNode={this.filterSelectNode}
            >
            </TreeSelect>
        );
    }
}

AyTreeSelect.propTypes = {
    style: PropTypes.object,
    defAy:PropTypes.object,
    multiple: PropTypes.bool,
    showSearch: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ])
};

export default AyTreeSelect;
