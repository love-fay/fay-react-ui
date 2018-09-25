import React from 'react';
import Button from 'rjd/button';
import Space from 'rjd/space';

class Demo4 extends React.Component {
    state = {
        loading: false,
        iconLoading: false,
    };

    enterLoading = () => {
        this.setState({ loading: true });
    };

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };

    render() {
        return (
            <span>
        <Button type="primary" loading>
          Loading
        </Button>
        <Space/>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br /><br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Space/>
        <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          Click me!
        </Button>
        <br /><br />
        <Button shape="circle" loading />
        <Space/>
        <Button type="primary" shape="circle" loading />
      </span>
        );
    }
}

export default Demo4;