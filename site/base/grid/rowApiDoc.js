import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['align', 'flex 布局下的垂直对齐方式：top middle bottom', 'string', 'top'],
    ['gutter', '栅格间隔，可以写成像素值或支持响应式的对象写法 { xs: 8, sm: 16, md: 24}', 'number/object', '0'],
    ['justify', 'flex 布局下的水平排列方式：start end center space-around space-between', 'string', 'start'],
    ['type', '布局模式，可选 flex，现代浏览器 下有效', 'string', '']
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};