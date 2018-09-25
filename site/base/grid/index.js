import React from 'react';
import RowApiDoc from './rowApiDoc';
import ColApiDoc from './colApiDoc';

export default () => {
    return (
        <div>
            <h2>API</h2>
            <h2>Row</h2>
            <RowApiDoc/>
            <h2>Col</h2>
            <ColApiDoc/>
        </div>
    )
}
