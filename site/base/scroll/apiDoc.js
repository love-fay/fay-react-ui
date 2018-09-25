import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['style', '样式（主要用来定高度和宽度）', '-', '-'],
    ['children', '子组件', 'React.Component', '-'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};