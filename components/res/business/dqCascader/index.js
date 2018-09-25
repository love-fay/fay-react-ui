import React, { Component } from 'react';
import Cascader from '../../../cascader';
import dqData from './dqData';
const treeData = dqData.data;
import PropTypes from 'prop-types';

class DqCascader extends Component {
    
    filterSelectNode=(value,node)=>{
        return node.props.title.indexOf(value)>-1;
    };
    
    render() {
        const {style={width:300},showSearch=true,onChange,value} = this.props;
        return (
            <Cascader
                value={value}
                style={style}
                options={treeData}
                onChange={onChange}
                placeholder="请选择"
                showSearch={showSearch}

            >
            </Cascader>
        );
    }
}

DqCascader.propTypes = {
    style: PropTypes.object,
    showSearch: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ])
};

export default DqCascader;
