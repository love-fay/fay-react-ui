import React from 'react';
import Demo1 from './demo1';
import Demo2 from './demo2';
import ApiDoc from './apiDoc';
import Space from 'rjd/space';

export default () => {
    return (
        <div>
            <h2>代码演示</h2>
            <div style={{display:'inline-block'}}>
                <Demo1/>
            </div>
            <Space/><Space/>
            <div style={{display:'inline-block'}}>
                <Demo2/>
            </div>
            <br/><br/>
            <h2>API</h2>
            <ApiDoc/>
        </div>
    )
}
