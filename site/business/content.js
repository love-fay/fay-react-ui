import React from 'react';
import {
    ajlbTreeSelect,
    ayTreeSelect,
    dqCascader,
    dqfjCascader,
    fyTreeSelect,
    rySelector,
    horizontalScrollMenu
} from './menu';
import AjlbTreeSelect from './ajlbTreeSelect';
import AyTreeSelect from './ayTreeSelect';
import DqCascader from './dqCascader';
import DqfjCascader from './dqfjCascader';
import FyTreeSelect from './fyTreeSelect';
import RySelector from './rySelector';
import HorizontalScrollMenu from './horizontalScrollMenu';
// import Login from './login';

const Home = () => <div>业务组件</div>;

export const getBasicComponentContent = {
    ['/business']: {
        name: '业务组件',
        component: <Home/>
    },
    [ajlbTreeSelect.path]: {
        name: ajlbTreeSelect.name,
        component: <AjlbTreeSelect/>
    },
    [ayTreeSelect.path]: {
        name: ayTreeSelect.name,
        component: <AyTreeSelect/>
    },
    [dqCascader.path]: {
        name: dqCascader.name,
        component: <DqCascader/>
    },
    [dqfjCascader.path]: {
        name: dqfjCascader.name,
        component: <DqfjCascader/>
    },
    [fyTreeSelect.path]: {
        name: fyTreeSelect.name,
        component: <FyTreeSelect/>
    },
    [rySelector.path]: {
        name: rySelector.name,
        component: <RySelector/>
    // },
    // [login.path]: {
    //     name: login.name,
    //     component: <Login/>
    },
    [horizontalScrollMenu.path]: {
        name: fyTreeSelect.name,
        component: <HorizontalScrollMenu/>
    },

};