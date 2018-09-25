import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['target', '设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数', 'Function', '() => window'],
    ['visibilityHeight', '滚动高度达到此参数值才出现 BackTop', 'number', '400'],
    ['onClick', '点击按钮的回调函数', 'Function', '-'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};