import React from 'react';
import ApiDoc from './apiDoc';
import LinkApiDoc from './linkApiDoc';

export default () => {
    return (
        <div>
            <h2>API</h2>
            <h2>Anchor Props</h2>
            <ApiDoc/>
            <h2>Link Props</h2>
            <LinkApiDoc/>
        </div>
    )
}
