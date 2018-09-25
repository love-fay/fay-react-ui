/**
 * Created by Administrator on 2018/5/18.
 */
import React from "react";
import Modal from "../../../modal";
import "./style/index.less";
import RySelectSingleContent from './rySelectSingleContent'

const stylePrefix = 'rj-rySelector-rySelectSingleModal';

export default ({userRange,onSelect,...modalProps}) => {
    return (
        <Modal
            title="人员选择（单选）"
            footer={null}
            maskClosable={false}
            mask={false}
            width={700}
            wrapClassName={stylePrefix}
            {...modalProps}
        >
            <RySelectSingleContent
                userRange={userRange}
                onSelect={onSelect}
            />
        </Modal>
    )
}
