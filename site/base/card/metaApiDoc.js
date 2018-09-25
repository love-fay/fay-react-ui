import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['avatar', '头像/图标', 'ReactNode', '-'],
    ['className', '容器类名', 'string', '-'],
    ['description', '描述内容', 'ReactNode', '-'],
    ['style', '定义容器类名的样式', 'object', '-'],
    ['title', '标题内容', 'ReactNode', '-'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};