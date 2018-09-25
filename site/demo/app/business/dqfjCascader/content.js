import React from 'react';
import Bundle from 'rj-lib/bundleNoProps';
import load1 from 'bundle-loader?lazy&name=DqfjCascaderDemo1!./demo1';

export const getComponentContent = {
    ['demo1']: <Bundle load={load1}/>,
    
};