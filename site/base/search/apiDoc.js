import React from 'react';
import ApiDoc from '../apiDoc';

const data = [
    ['delay', 'change延时', 'number', '500'],
    ['onChange', '输入变化时触发回调', 'function(value)', '-'],
];

export default () => {
    return (
        <ApiDoc data={data}/>
    );
};