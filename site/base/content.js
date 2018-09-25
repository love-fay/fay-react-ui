import React from 'react';
import {
    button, table, icon, modal, scroll, dropdown, datePicker, dialog, search, customScroll
} from './menu';
import Button from './button';
import Icon from './icon';
import Table from './table';
import Modal from './modal';
// import Scroll from './scroll';
import Dropdown from './dropdown';
import DatePicker from './datePicker';
import Dialog from './dialog';
import Search from './search';
import CustomScroll from './customScroll';

const Home = () => <div>基础组件</div>;

export const getBasicComponentContent = {
    ['/base']: {
        name: '基础组件',
        component: <Home/>
    },
    [button.path]: {
        name: button.name,
        component: <Button/>
    },
    [table.path]: {
        name: table.name,
        component: <Table/>
    },
    [icon.path]: {
        name: icon.name,
        component: <Icon/>
    },
    [modal.path]: {
        name: modal.name,
        component: <Modal/>
    },
    // [scroll.path]: {
    //     name: scroll.name,
    //     component: <Scroll/>
    // },
    [customScroll.path]: {
        name: customScroll.name,
        component: <CustomScroll/>
    },
    [dropdown.path]: {
        name: dropdown.name,
        component: <Dropdown/>
    },
    [datePicker.path]: {
        name: datePicker.name,
        component: <DatePicker/>
    },
    [dialog.path]: {
        name: dialog.name,
        component: <Dialog/>
    },
    [search.path]: {
        name: search.name,
        component: <Search/>
    }
};