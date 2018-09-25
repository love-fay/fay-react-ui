import React, {Component} from 'react';
import Modal from 'rjd/modal';
import Button from 'rjd/button';
import Space from 'rjd/space';
import createHistory from 'history/createBrowserHistory';

class Demo4 extends Component{

    info = () =>{
        Modal.info({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk(){
                console.log('OK');
            }
        })
    };

    success = () =>{
        Modal.success({
            title: 'This is a success message',
            content: 'some messages...some messages...'
        })
    };

    error = () =>{
        Modal.error({
            title: 'This is an error message',
            content: 'some messages...some messages...'
        })
    };

    warning = () =>{
        Modal.warning({
            title: 'This is a warning message',
            content: 'some messages...some messages...'
        })
    };

    render(){
        return (
            <div>
                <Button onClick={this.info}>Info</Button>
                <Space/>
                <Button onClick={this.success}>Success</Button>
                <Space/>
                <Button onClick={this.error}>Error</Button>
                <Space/>
                <Button onClick={this.warning} type="dashed">Warning</Button>
            </div>
        )
    }
}

export default Demo4;