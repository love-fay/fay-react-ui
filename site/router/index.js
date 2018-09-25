/**
 * Created by feichongzheng on 16/12/18.
 */
import React from 'react';
import {Switch, Route, Router, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Base from '../base';
import Business from '../business';
import Home from '../home';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { purple, green } from 'material-ui/colors';

const theme = createMuiTheme({
    palette: {
        primary: { main: purple[500] },
        secondary: { main: green[500] },
    },
});

const history = createBrowserHistory();

export default () => {
    return (
        <MuiThemeProvider theme={theme}>
        <Router history={history}>
            <Switch>
                <Route exact strict path="/" component={Home}/>
                <Route path="/base" component={Base}/>
                <Route path="/business" component={Business}/>
                {/*<Route path='/404' component={error.E404}/>*/}
                {/*<Route path='/401D3' component={error.E401D3}/>*/}
                {/*<Route path='/login' component={Login}/>*/}
                {/*<Route path={RouterPaths.UUMS} component={Uums}/>*/}
                {/*<Route path={RouterPaths.UC} component={Uc}/>*/}
                {/*<Route component={error.E404}/>*/}
            </Switch>
        </Router>
        </MuiThemeProvider>
    );
}
