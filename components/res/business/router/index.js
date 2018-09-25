import React from 'react';
import Provider from 'rj-lib/provider';
import {Route, Switch} from 'react-router-dom';

export default ({root}) => {
    return (
        <Provider>
            <Route component={root}/>
        </Provider>
    )
}
