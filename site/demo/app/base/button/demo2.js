import React from 'react';
import Button from 'rjd/button';
import Space from 'rjd/space';

export default () => {
    return (
        <div>
            <Button type="primary" shape="circle" icon="search" />
            <Space/>
            <Button type="primary" icon="search">Search</Button>
            <Space/>
            <Button shape="circle" icon="search" />
            <Space/>
            <Button icon="search">Search</Button>
            <br /><br />
            <Button shape="circle" icon="search" />
            <Space/>
            <Button icon="search">Search</Button>
            <Space/>
            <Button type="dashed" shape="circle" icon="search" />
            <Space/>
            <Button type="dashed" icon="search">Search</Button>
        </div>
    );
}