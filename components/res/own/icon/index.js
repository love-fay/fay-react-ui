import React from 'react';
import PropTypes from 'prop-types';
import './style/index.less';
import './font/iconfont_2018_09-13';
import classnames from 'classnames';
import '../../antd/style/index';

const Icon = ({title, onClick, type, className, style, bold}) => {
    // const baseUrl = window.location.href.replace(window.location.hash, "");
    return (
        <svg title={title} onClick={onClick} className={classnames('anticon', 'rjicon', className)} style={bold ? {strokeWidth:'30', ...style}:style} aria-hidden="true">
            <use xlinkHref={'#icon-'+type}></use>
        </svg>
    )
};

Icon.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string.isRequired,
    className: PropTypes.any,
    style: PropTypes.any,
    bold: PropTypes.bool
};

export default Icon;