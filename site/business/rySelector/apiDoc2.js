import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['defaultSelectedRys','默认已选人员','array[{username,nickname,orgName,departmentName}]',''],
    ['multiple', '是否多选', 'bool', 'true'],
    ['userRange', '人员范围。1、全省；3本院', 'number', '3'],
    ['onChange', '当选中人员变化时回调', 'function(selectedRys)', ''],
];


export default () => {
    return (
        <ApiDoc data={data}/>
    );
};