import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['mod', '两种模式："scrollInline"内部滚动，其他则是外部滚动', 'string', '-'],
    ['children', '内容区域组件', 'React.Component', '-'],
    ['width', '宽度', 'string', '-'],
    ['maxHeight', '内容区域最大高度[mod="scrollInline"时有效]', 'string', '-'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};