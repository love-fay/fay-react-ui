import React from 'react';
import Bundle from 'rj-lib/bundleNoProps';
import load1 from 'bundle-loader?lazy&name=AyTreeSelectDemo1!./demo1';
import load2 from 'bundle-loader?lazy&name=AyTreeSelectDemo2!./demo2';
import load3 from 'bundle-loader?lazy&name=AyTreeSelectDemo3!./demo3';

export const getComponentContent = {
    ['demo1']: <Bundle load={load1}/>,
    ['demo2']: <Bundle load={load2}/>,
    ['demo3']: <Bundle load={load3}/>
};