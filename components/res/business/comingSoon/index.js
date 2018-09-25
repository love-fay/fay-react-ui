/**
 * Created by feichongzheng on 17/9/27.
 */
import React from 'react';
import Loadable  from 'fay-react-lib/loadable';

export default (props) => <Loadable loader={{
    view: () => import(/* webpackChunkName: "FayReactUiComingSoon" */'./views')
}} props={props}/>