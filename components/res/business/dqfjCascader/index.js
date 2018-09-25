import React, { Component } from 'react';
import Cascader from '../../../cascader';
import dqFjData from './dqFjData';
const treeData = dqFjData.data;
import PropTypes from 'prop-types';

class DqFjCascader extends Component {
   
    filterSelectNode=(value,node)=>{
        return node.props.title.indexOf(value)>-1;
    };

    render() {
        const defaultValue=['350000'];
        const {style={width:300},showSearch=true,onChange,value} = this.props;
        return (
            <Cascader
                value={value}
                style={style}
                options={treeData}
                onChange={onChange}
                placeholder="请选择"
                showSearch={showSearch}
                defaultValue={defaultValue}
            >
            </Cascader>
        );
    }
}

DqFjCascader.propTypes = {
    style: PropTypes.object,
    showSearch: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ])
};

export default DqFjCascader;

