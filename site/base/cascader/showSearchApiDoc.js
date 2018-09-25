import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['filter', '接收 inputValue path 两个参数，当 path 符合筛选条件时，应返回 true，反之则返回 false。', 'function(inputValue, path): boolean', ''],
    ['matchInputWidth', '搜索结果列表是否与输入框同宽', 'boolean', ''],
    ['render', '用于渲染 filter 后的选项', 'function(inputValue, path): ReactNode', ''],
    ['sort', '用于排序 filter 后的选项', 'function(a, b, inputValue)', ''],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};