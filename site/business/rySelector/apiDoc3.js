import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['userRange', '人员范围。1、全省；3本院', 'number', '3'],
    ['onSelect', '选中人员后回调方法', 'function(selectedRys)', ''],
];


export default () => {
    return (
        <ApiDoc data={data}/>
    );
};