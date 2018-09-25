import React, { Component } from 'react';
import TreeSelect from '../../../tree-select';
import fyData from './fyData';
import PropTypes from 'prop-types';

class FyTreeSelect extends Component {
  
    filterSelectNode=(value,node)=>{
        return node.props.title.indexOf(value)>-1;
    };
   
    filterData = (data,v)=>{
        return  data.filter(item =>item.value ===v ||item.key ===v);
    };
     
    render() {
        const expandedKeys = ["1600"];
        const {style={width:300},multiple,showSearch,onChange,value,defFy} = this.props;
        let treeData = fyData.data;
        if(defFy){
            if( (defFy.value && defFy.value !== -1) ||(defFy.key && defFy.key !== 1600) ){
                treeData = [...this.filterData(treeData[0].children,defFy.value||defFy.key)];
            }
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

FyTreeSelect.propTypes = {
    style: PropTypes.object,
    defFy:PropTypes.object,
    multiple: PropTypes.bool,
    showSearch: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ])
};

export default FyTreeSelect;
