import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['title', '列头显示文字', 'string|ReactNode', '-']
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};