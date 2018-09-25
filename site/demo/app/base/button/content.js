import React from 'react';
import Bundle from 'rj-lib/bundleNoProps';
import load1 from 'bundle-loader?lazy&name=ButtonDemo1!./demo1';
import load2 from 'bundle-loader?lazy&name=ButtonDemo2!./demo2';
import load3 from 'bundle-loader?lazy&name=ButtonDemo3!./demo3';
import load4 from 'bundle-loader?lazy&name=ButtonDemo4!./demo4';
import load5 from 'bundle-loader?lazy&name=ButtonDemo5!./demo5';
import load6 from 'bundle-loader?lazy&name=ButtonDemo6!./demo6';
import load7 from 'bundle-loader?lazy&name=ButtonDemo7!./demo7';
import load8 from 'bundle-loader?lazy&name=ButtonDemo8!./demo8';

export const getComponentContent = {
    ['demo1']: <Bundle load={load1}/>,
    ['demo2']: <Bundle load={load2}/>,
    ['demo3']: <Bundle load={load3}/>,
    ['demo4']: <Bundle load={load4}/>,
    ['demo5']: <Bundle load={load5}/>,
    ['demo6']: <Bundle load={load6}/>,
    ['demo7']: <Bundle load={load7}/>,
    ['demo8']: <Bundle load={load8}/>
};