import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['className', '容器 className', 'string', '-'],
    ['style', '指定样式', 'object', '-'],
    ['hasSider', '表示子元素里有 Sider，一般不用指定。可用于服务端渲染时避免样式闪动', 'boolean', '-'],
];


export default () => {
    return (
        <ApiDoc data={data}/>
    );
};