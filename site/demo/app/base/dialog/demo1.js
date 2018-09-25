import React, {Component} from 'react';
import Button from 'rjd/button';
import Dialog from 'rjd/dialog';

class Demo1 extends Component{

    state = {visible: false};

    showDialog = () => {
        this.setState({visible: true})
    };

    handleCancel = (e) => {
        this.setState({visible: false})
    };

    render(){
        const {visible} = this.state;
        return (
            <span>
                <Button type='primary' onClick={this.showDialog}>Open</Button>
                <Dialog
                    title='Basic Dialog'
                    visible={visible}
                    top={100}
                    width={800}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Dialog>
            </span>
        )
    }
}

export default Demo1;