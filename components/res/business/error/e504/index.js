/**
 * Created by feichongzheng on 17/9/27.
 */
import React from 'react';
import Loadable  from 'rj-lib/loadable';

export default (props) => <Loadable loader={{
    view: () => import(/* webpackChunkName: "RjdE504" */'./views')
}} props={props}/>
