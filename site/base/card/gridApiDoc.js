import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['className', '网格容器类名', 'string', '-'],
    ['style', '定义网格容器类名的样式', 'object', '-'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};