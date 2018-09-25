import React from 'react';
import ApiDoc from './apiDoc';
import GridApiDoc from './gridApiDoc';
import MetaApiDoc from './metaApiDoc';

export default () => {
    return (
        <div>
            <h2>API</h2>
            <h2>Card</h2>
            <ApiDoc/>
            <h2>Card.Grid</h2>
            <GridApiDoc/>
            <h2>Card.Meta</h2>
            <MetaApiDoc/>
        </div>
    )
}
