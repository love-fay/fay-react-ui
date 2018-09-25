import React from 'react';
import {withRouter} from 'react-router-dom';
import Login from '../login';

export default withRouter(({history, location}) => {

    const successLogin = () => {
        const {state} = location;
        history.push((state && state.from) || '/');
    };

    return (
        <Login successLogin={successLogin}/>
    )
})
