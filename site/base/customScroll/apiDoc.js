import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['style', '样式', '-', '-'],
    ['className', '类名', 'string', '-'],
    ['backgroundColor', '子组件', 'string', '#FFFFFF'],
    ['children', '子组件', 'React.Component', '-'],
    ['overflowY', '竖向滚动条', 'bool', 'true'],
    ['overflowX', '横向滚动条', 'bool', 'true']
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};