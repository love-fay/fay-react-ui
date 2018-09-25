import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['outClickHidden', '点击外部DOM隐藏菜单', 'bool', 'false']
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};