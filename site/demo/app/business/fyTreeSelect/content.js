import React from 'react';
import Bundle from 'rj-lib/bundleNoProps';
import load1 from 'bundle-loader?lazy&name=FyTreeSelectDemo1!./demo1';
import load2 from 'bundle-loader?lazy&name=FyTreeSelectDemo2!./demo2';
import load3 from 'bundle-loader?lazy&name=FyTreeSelectDemo3!./demo3';

export const getComponentContent = {
    ['demo1']: <Bundle load={load1}/>,
    ['demo2']: <Bundle load={load2}/>,
    ['demo3']: <Bundle load={load3}/>
};