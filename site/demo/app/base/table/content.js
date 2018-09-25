import React from 'react';
import Bundle from 'rj-lib/bundleNoProps';
import load1 from 'bundle-loader?lazy&name=TableDemo1!./demo1';
import load2 from 'bundle-loader?lazy&name=TableDemo2!./demo2';

export const getComponentContent = {
    demo1: <Bundle load={load1}/>,
    demo2: <Bundle load={load2}/>
};