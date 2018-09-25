import React from 'react';
import Grid from './grid';
import ApiDoc from './apiDoc';
import ColumnApiDoc from './columnApiDoc';
import ColumnGroupApiDoc from './columnGroupApiDoc';
import RowSelectionApiDoc from './rowSelectionApiDoc';
import SelectionApiDoc from './selectionApiDoc';

export default () => {
    return (
        <div>
            <h2>代码演示</h2>
            <Grid/>
            <h2>API</h2>
            <ApiDoc/>
            <h2>Column</h2>
            <ColumnApiDoc/>
            <h2>ColumnGroup</h2>
            <ColumnGroupApiDoc/>
            <h2>rowSelection</h2>
            <RowSelectionApiDoc/>
            <h2>selection</h2>
            <SelectionApiDoc/>
        </div>
    )
}
