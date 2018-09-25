import React from 'react';
import Button from 'rjd/button';
import Space from 'rjd/space';
import Icon from 'rjd/icon';
import Radio from 'rjd/radio';

class Demo3 extends React.Component {
    state = {
        size: 'large',
    };

    handleSizeChange = (e) => {
        this.setState({ size: e.target.value });
    };

    render() {
        const size = this.state.size;
        return (
            <div>
                <Radio.Group value={size} onChange={this.handleSizeChange}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>
                <br /><br />
                <Button type="primary" size={size}>Primary</Button>
                <Space/>
                <Button size={size}>Normal</Button>
                <Space/>
                <Button type="dashed" size={size}>Dashed</Button>
                <Space/>
                <Button type="danger" size={size}>Danger</Button>
                <br /><br />
                <Button type="primary" shape="circle" icon="download" size={size} />
                <Space/>
                <Button type="primary" icon="download" size={size}>Download</Button>
                <br /><br />
                <Button.Group size={size}>
                    <Button type="primary">
                        <Icon type="left" />Backward
                    </Button>
                    <Button type="primary">
                        Forward<Icon type="right" />
                    </Button>
                </Button.Group>
            </div>
        );
    }
}

export default Demo3;