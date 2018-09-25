import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['appSn', '各项目config文件配置的appSn', 'string', '-'],
    ['style', '设置样式', 'object', '{width:300}'],
    ['menuClick', '点击MenuItem，调用此函数', 'func', '-'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};