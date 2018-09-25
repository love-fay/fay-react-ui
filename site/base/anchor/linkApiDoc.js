import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['href', '锚点链接', 'string', ''],
    ['title', '文字内容', 'string|ReactNode', '']
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};