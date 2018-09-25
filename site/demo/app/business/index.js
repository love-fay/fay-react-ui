import React from 'react';
import {getComponentContent} from './content';

export default ({location}) => {
    const {pathname} = location;
    const pathArr = pathname.split('/');
    return (
        <div style={{padding:'50px 10px 0 16px'}}>
            {getComponentContent[pathArr[3]].component({path:pathArr[4]})}
        </div>
    )
}