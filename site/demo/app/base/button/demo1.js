import React from 'react';
import Button from 'rjd/button';
import Space from 'rjd/space';

export default () => {
    return (
        <div>
            <Button type="primary">Primary</Button>
            <Space/>
            <Button>Default</Button>
            <Space/>
            <Button type="dashed">Dashed</Button>
            <Space/>
            <Button type="danger">Danger</Button>
        </div>
    );
}