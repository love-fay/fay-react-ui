/**
 * Created by Administrator on 2018/5/18.
 */
import React from "react";
import RySelectContent from './rySelectContent'
import "./style/index.less";
import Modal from "../../../modal";

const stylePrefix = 'rj-rySelector-rySelectModal';

export default ({userRange,defaultSelectedRys,onOk,...modalProps}) => {
    return (
        <Modal
            title="人员选择"
            footer={null}
            maskClosable={false}
            mask={false}
            width={700}
            wrapClassName={stylePrefix}
            {...modalProps}
        >
            <RySelectContent
                defaultSelectedRys={defaultSelectedRys}
                userRange={userRange}
                onOk={onOk}
                onCancel={modalProps.onCancel}
            />
        </Modal>
    )
}
