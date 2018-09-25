import React from 'react';
import AntdModal from "../res/antd/modal";
import RjModal from "../res/own/modal";

export default class Modal extends AntdModal {
    render(){
        return (
            (this.props.mod === 'scrollInline') ? <RjModal {...this.props}/> : <AntdModal {...this.props}/>
        )
    }
}