import React from 'react';
import AjlbTreeSelect from './ajlbTreeSelect';
import AyTreeSelect from './ayTreeSelect';
import DqCascader from './dqCascader';
import DqfjCascader from './dqfjCascader';
import FyTreeSelect from './fyTreeSelect';
import RySelector from './rySelector';
import Login from './login';
import HorizontalScrollMenu from './horizontalScrollMenu';

export const getComponentContent = {
    ['rySelector']: {
        component: (props) => <RySelector {...props}/>
    },
    ['ajlbTreeSelect']: {
        component: (props) => <AjlbTreeSelect {...props}/>
    },
    ['ayTreeSelect']: {
        component: (props) => <AyTreeSelect {...props}/>
    },
    ['dqCascader']: {
        component: (props) => <DqCascader {...props}/>
    },
    ['dqfjCascader']: {
        component: (props) => <DqfjCascader {...props}/>
    },
    ['fyTreeSelect']: {
        component: (props) => <FyTreeSelect {...props}/>
    },
    ['login']: {
        component: (props) => <Login {...props}/>
    },
    ['horizontalScrollMenu']: {
        component: (props) => <HorizontalScrollMenu {...props}/>
    }
};