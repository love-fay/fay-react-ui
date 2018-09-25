import React from 'react';
import ApiDoc from './apiDoc';
import ShowSearchApiDoc from './showSearchApiDoc';

export default () => {
    return (
        <div>
            <h2>API</h2>
            <ApiDoc/>
            <h3>showSearch 为对象时，其中的字段：</h3>
            <ShowSearchApiDoc/>
        </div>
    )
}
