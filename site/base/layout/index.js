import React from 'react';
import ApiDoc from './apiDoc';
import SiderApiDoc from './siderApiDoc';

export default () => {
    return (
        <div>
            <h2>API</h2>
            <h2>Layout</h2>
            <ApiDoc/>
            <h2>Layout.Sider</h2>
            <SiderApiDoc/>
        </div>
    )
}
