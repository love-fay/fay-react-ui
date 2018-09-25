import React from 'react';
import Button from 'rjd/button';
import Space from 'rjd/space';
import Icon from 'rjd/icon';
const ButtonGroup = Button.Group;

export default () => {
    return (
        <div>
            <h4>Basic</h4>
            <br/>
            <ButtonGroup>
                <Button>Cancel</Button>
                <Button>OK</Button>
            </ButtonGroup>
            <Space/>
            <ButtonGroup>
                <Button disabled>L</Button>
                <Button disabled>M</Button>
                <Button disabled>R</Button>
            </ButtonGroup>
            <Space/>
            <ButtonGroup>
                <Button>L</Button>
                <Button>M</Button>
                <Button>R</Button>
            </ButtonGroup>
            <br/><br/>
            <h4>With Icon</h4>
            <br/>
            <ButtonGroup>
                <Button type="primary">
                    <Icon type="left" />Go back
                </Button>
                <Button type="primary">
                    Go forward<Icon type="right" />
                </Button>
            </ButtonGroup>
            <Space/>
            <ButtonGroup>
                <Button type="primary" icon="cloud" />
                <Button type="primary" icon="cloud-download" />
            </ButtonGroup>
        </div>
    );
}