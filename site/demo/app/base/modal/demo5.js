import React, {Component} from 'react';
import Modal from 'rjd/modal';
import Button from 'rjd/button';

class Demo extends Component{

    state = {visible: false, html: []};

    showModal = () => {
        this.setState({visible: true})
    };

    handleCancel = (e) => {
        this.setState({visible: false})
    };

    handleClick = () => {
        let html = this.state.html;
        html.push(<p key={html.length}>fay's scroll</p>);
        this.setState({
            html: html
        })
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
                    width='500px'
                    maxHeight={500}
                    mod='scrollInline'
                >
                    <p>Some contents...</p>
                    <p style={{width:'700px'}}>Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <Button onClick={this.handleClick}>add text</Button>
                    <div>{this.state.html}</div>
                </Modal>
            </span>
        )
    }
}

export default Demo;