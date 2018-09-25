import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['style', '设置样式', 'object', '{width:300}'],
    ['showSearch', '支持搜索', 'bool', 'false'],
    ['onChange', '选中option或input的value变化时，调用此函数', 'func', '-'],
    ['value', '指定当前选中的条目', 'string | array', 'undefined']
];


export default () => {
    return (
        <ApiDoc data={data}/>
    );
};