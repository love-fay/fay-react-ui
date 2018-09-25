import React from 'react';
import Button from './button';
import Table from './table';
import Modal from './modal';
// import Scroll from './scroll';
import CustomScroll from './customScroll';
import Dropdown from './dropdown';
import DatePicker from './datePicker';
import Dialog from './dialog';
import Search from './search'
import UploadFile from './uploadFile'

export const getComponentContent = {
    button: {
        component: (props) => <Button {...props}/>
    },
    table: {
        component: (props) => <Table {...props}/>
    },
    modal: {
        component: (props) => <Modal {...props}/>
    },
    // scroll: {
    //     component: (props) => <Scroll {...props}/>
    // },
    customScroll: {
        component: (props) => <CustomScroll {...props}/>
    },
    dropdowm: {
        component: (props) => <Dropdown {...props}/>
    },
    datePicker: {
        component: (props) => <DatePicker {...props}/>
    },
    dialog: {
        component: (props) => <Dialog {...props}/>
    },
    search: {
        component: (props) => <Search {...props}/>
    },
    uploadFile: {
        component: (props) => <UploadFile {...props}/>
    }
};