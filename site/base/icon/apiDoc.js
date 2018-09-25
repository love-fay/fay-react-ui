import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['spin', '是否有旋转动画', 'boolean', 'false'],
    ['style', '设置图标的样式，例如 fontSize 和 color', 'object', '-'],
    ['type', '图标类型', 'string', '-'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};