import React from 'react';
import Bundle from 'rj-lib/bundleNoProps';
import load1 from 'bundle-loader?lazy&name=DialogDemo1!./demo1';
import load2 from 'bundle-loader?lazy&name=DialogDemo2!./demo2';
import load3 from 'bundle-loader?lazy&name=DialogDemo3!./demo3';
import load4 from 'bundle-loader?lazy&name=DialogDemo4!./demo4';

export const getComponentContent = {
    ['demo1']: <Bundle load={load1}/>,
    ['demo2']: <Bundle load={load2}/>,
    ['demo3']: <Bundle load={load3}/>,
    ['demo4']: <Bundle load={load4}/>
};