import React from 'react';
import './style/index.less';
import classnames from 'classnames';

export default ({style, className, children}) => {
    const stylePrefix = 'rj-convex';
    return (
        <div style={style} className={classnames(stylePrefix, className)}>
            {children}
        </div>
    )
}