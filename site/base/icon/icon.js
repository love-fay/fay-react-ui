import React from 'react';
import Icon from 'rjd/icon';
import Card from 'rjd/card';
import data from './data.json';

export default () => {

    const loop = data => data.map((item, i) => {
        const {name} = item;
        return (
            <Card style={{float:'left', width: '200px'}} key={i}>
                <Icon type={name} style={{fontSize:'50px'}}/>
                <div>{name}</div>
            </Card>
        )
    });

    return (
        <div style={{textAlign:'center', display: 'inline-block'}}>
            {loop(data)}
        </div>
    )
}
