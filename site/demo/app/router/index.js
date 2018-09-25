/**
 * Created by feichongzheng on 16/12/18.
 */
import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import BaseDemo from '../base';
import BusinessDemo from '../business';
import Login from '../business/login/demo1';

const history = createBrowserHistory();

const HomePage = () => <div>首页</div>;

export default () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact strict path="/" component={HomePage}/>
                <Route path="/demo/base" component={BaseDemo}/>
                <Route path="/demo/business" component={BusinessDemo}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </Router>
    );
}
