import React from 'react';
import Button from 'rjd/button';
import Space from 'rjd/space';

export default () => {
    return (
        <div>
            <Button type="primary">Primary</Button>
            <Space/>
            <Button type="primary" disabled>Primary(disabled)</Button>
            <br /><br />
            <Button>Default</Button>
            <Space/>
            <Button disabled>Default(disabled)</Button>
            <br /><br />
            <Button>Ghost</Button>
            <Space/>
            <Button disabled>Ghost(disabled)</Button>
            <br /><br />
            <Button type="dashed">Dashed</Button>
            <Space/>
            <Button type="dashed" disabled>Dashed(disabled)</Button>
        </div>
    );
}