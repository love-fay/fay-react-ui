import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['offsetBottom', '距离窗口底部达到指定偏移量后触发', 'number', ''],
    ['offsetTop', '距离窗口顶部达到指定偏移量后触发', 'number', ''],
    ['target', '设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数', '() => HTMLElement', '() => window'],
    ['onChange', '固定状态改变时触发的回调函数', 'Function(affixed)', '无']
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};