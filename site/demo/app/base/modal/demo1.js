import React, {Component} from 'react';
import Modal from 'rjd/modal';
import Button from 'rjd/button';

class Demo1 extends Component{

    state = {visible: false};

    showModal = () => {
        this.setState({visible: true})
    };

    handleCancel = (e) => {
        this.setState({visible: false})
    };

    render(){
        return (
            <span>
                <Button type='primary' onClick={this.showModal}>Open</Button>
                <Modal
                    title='Basic Modal'
                    visible={this.state.visible}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </span>
        )
    }
}

export default Demo1;