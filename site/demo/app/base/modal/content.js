import React from 'react';
import Bundle from 'rj-lib/bundleNoProps';
import load1 from 'bundle-loader?lazy&name=ModalDemo1!./demo1';
import load2 from 'bundle-loader?lazy&name=ModalDemo2!./demo2';
import load3 from 'bundle-loader?lazy&name=ModalDemo3!./demo3';
import load4 from 'bundle-loader?lazy&name=ModalDemo4!./demo4';
import load5 from 'bundle-loader?lazy&name=ModalDemo5!./demo5';

export const getComponentContent = {
    ['demo1']: <Bundle load={load1}/>,
    ['demo2']: <Bundle load={load2}/>,
    ['demo3']: <Bundle load={load3}/>,
    ['demo4']: <Bundle load={load4}/>,
    ['demo5']: <Bundle load={load5}/>
};