import React from 'react';
import Button from 'rjd/button';
import Space from 'rjd/space';
import Menu from 'rjd/menu';
import Dropdown from 'rjd/dropdown';
import Icon from 'rjd/icon';

function handleMenuClick(e) {
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">1st item</Menu.Item>
        <Menu.Item key="2">2nd item</Menu.Item>
        <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
);

export default () => {
    return (
        <div>
            <Button type="primary">primary</Button>
            <Space/>
            <Button>secondary</Button>
            <Space/>
            <Dropdown overlay={menu}>
                <Button>
                    Actions <Icon type="down" />
                </Button>
            </Dropdown>
        </div>
    );
}