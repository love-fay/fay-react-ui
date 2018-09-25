import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['visible', '可见性', 'boolean', 'false'],
    ['title', '标题', '-', '-'],
    ['onCancel', '点击右上角X时触发的函数', 'function', 'button'],
    ['children', '子组件', '-', '-'],
    ['className', '类', 'string', 'false'],
    ['style', '样式(主要定义弹出框的位置[top,right,bottom,left])', 'object', '-'],
    ['width', '宽度', 'number', '500'],
    ['height', '高度', 'number', '500'],
    ['mod', '两种模式："scrollInline"内部滚动，其他则是外部滚动', 'string', '-'],
    ['maxHeight', '内容区域最大高度[mod="scrollInline"时有效]', 'number', '-']
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};