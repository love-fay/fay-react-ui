import React from 'react';
import Dropdown from '../../antd/dropdown';
import Menu from '../../antd/menu';
import './style/index.less';
import classnames from 'classnames';

export default class Index extends React.Component{

    handleClick = (e) => {
        e.stopPropagation();
    };

    render(){
        const stylePrefix = 'rj-dropdown';
        const content = (
            <Menu selectable className={stylePrefix+'-menu'}>
                <Menu.Item>
                    <div onClick={this.handleClick} className={stylePrefix+'-content'}>
                        {this.props.overlay}
                    </div>
                </Menu.Item>
            </Menu>
        );


        return (
            <Dropdown {...{...this.props, overlay: content, className: classnames(stylePrefix, this.props.className)}}>
                {this.props.children}
            </Dropdown>
        );
    }
}
