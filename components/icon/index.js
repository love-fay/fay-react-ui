import React from 'react';
import PropTypes from 'prop-types';
import AntdIcon from "../res/antd/icon";
import RjdIcon from "../res/own/icon";
import data from './data';

const Icon = (props) => (props.antd || data[props.type])?<AntdIcon {...{style:{fontWeight:props.bold?'bold':'100'}, ...props, bold:undefined}}/>:<RjdIcon {...props}/>;

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.any,
    style: PropTypes.any,
    antd: PropTypes.bool,
    bold: PropTypes.bool
};

export default Icon;