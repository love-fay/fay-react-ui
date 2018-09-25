import React from 'react';
import Grid from './grid';
import ApiDoc from './apiDoc';

export default () => {
    return (
        <div>
            <h2>代码演示</h2>
            <Grid/>
            <h2>API</h2>
            <ApiDoc/>
        </div>
    )
}