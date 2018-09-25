import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['icon', '设置头像的图标类型，参考 Icon 组件', 'string', '-'],
    ['shape', '指定头像的形状', 'Enum{ \'circle\', \'square\' }', 'circle'],
    ['size', '设置头像的大小', 'Enum{ \'large\', \'small\', \'default\' }', 'default'],
    ['src', '图片类头像的资源地址', 'string', '-'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};