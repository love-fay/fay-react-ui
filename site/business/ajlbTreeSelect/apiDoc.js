import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['style', '设置样式', 'object', '{width:300}'],
    ['defAjlb', '案件列别（展示对应的案件及其子集）', 'object', '-'],
    ['multiple', '支持多选', 'bool', 'false'],
    ['onChange', '选中option或input的value变化时，调用此函数', 'function(value, label, map)', '-'],
    ['value', '指定当前选中的条目', 'string | array', 'undefined']
];


export default () => {
    return (
        <ApiDoc data={data}/>
    );
};