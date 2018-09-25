import React from 'react';
import './style/index.less';
import Modal from '../../antd/modal';
import Scroll from '../customScroll';
import classnames from 'classnames';

export default (props) => {
    const {maxHeight, children, className} = props;
    const stylePrefix = 'rj-modal';
    return (
        <Modal {...{...props, className: classnames(stylePrefix, className)}}>
            <Scroll style={{width:'100%', maxHeight, padding:'10px 0 0 10px', height: '100%'}}>
                {children}
            </Scroll>
        </Modal>
    )
}