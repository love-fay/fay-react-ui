import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['defaultSelectedRys','默认已选人员','array[{username,nickname,orgName,departmentName}]',''],
    ['userRange', '人员范围。1、全省；3本院', 'number', '3'],
    ['onOk', '点击确认按钮回调方法，返回选中人员信息。', 'function(selectedRys)', ''],
];


export default () => {
    return (
        <ApiDoc data={data}/>
    );
};