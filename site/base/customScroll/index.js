import React from 'react';
import Demo1 from './demo1';
import ApiDoc from './apiDoc';

export default () => {
    return (
        <div>
            <h2>代码演示</h2>
            <div style={{display:'inline-block'}}>
                <Demo1/>
            </div>
            <br/><br/>
            <h2>API</h2>
            <ApiDoc/>
        </div>
    )
}
