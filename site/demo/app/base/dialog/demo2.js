import React, {Component} from 'react';
import Button from 'rjd/button';
import Dialog from 'rjd/dialog';

class Demo2 extends Component{

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
                    width={800}
                    onCancel={this.handleCancel}
                    style={{bottom: '20px', right: '20px', top: 'auto', left: 'auto'}}
                    mod='scrollInline'
                >
                    <p>Some contents...</p>
                    <p style={{width:'700px'}}>Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p><p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Dialog>
            </span>
        )
    }
}

export default Demo2;