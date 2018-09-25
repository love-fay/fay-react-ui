import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fyData from './fyData';
import Icon from '../../../../icon';
import TreeSelect from '../../../../tree-select';

/**
 * 法院 TreeSelect
 */
const stylePrefix = 'rj-login';
class FyTreeSelect extends Component {

    constructor(props) {
        super(props);
    }

    handleSelectChange = (value) => {
        this.triggerChange(value);
    };

    triggerChange = (changeValue) => {
        const {onChange} = this.props;
        if (onChange) {
            onChange(changeValue);
        }
    };

    render() {
        const expandedKeys = ["1600"];
        const {style, dropdownStyle, multiple, allowClear, placeholder, showSearch,value} = this.props;
        return (
            <span className={stylePrefix + '-select-affix-wrapper'}>
                <span className={stylePrefix + '-select-input-prefix'}>
                    <Icon type="wdmh" style={{color: '#999', fontSize: 18}}/>
                </span>
                <TreeSelect
                    style={style}
                    value={value}
                    treeData={fyData}
                    multiple={multiple}
                    allowClear={allowClear}
                    showSearch={showSearch}
                    placeholder={placeholder}
                    dropdownStyle={dropdownStyle}
                    treeDefaultExpandedKeys={expandedKeys}
                    onChange={this.handleSelectChange}
                    filterTreeNode={this.filterSelectNode}
                />
            </span>
        );
    }
}

FyTreeSelect.propTypes = {
    style: PropTypes.object,
    dropdownStyle: PropTypes.object,
    multiple: PropTypes.bool,
    allowClear: PropTypes.bool,
    showSearch: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),
    prefix: PropTypes.node,

};
FyTreeSelect.defaultProps = {
    placeholder: "请选择",
    dropdownStyle: {maxHeight: 450, overflow: 'auto'}
};


export default FyTreeSelect;
