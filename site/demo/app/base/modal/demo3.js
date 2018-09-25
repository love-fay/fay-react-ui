import React, {Component} from 'react';
import Modal from 'rjd/modal';
import Button from 'rjd/button';
import Space from 'rjd/space';
const confirm = Modal.confirm;

class Demo3 extends Component{

    showConfirm = () =>{
        confirm({
            title: 'Do you want to delete these items?',
            content: 'Some descriptions',
            onOk(){
                console.log('OK');
            },
            onCancel(){
                console.log('Cancel');
            }
        })
    };

    showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure delete this task?',
            content: 'Some descriptions',
            okTest: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk(){
                console.log('OK');
            },
            onCancel(){
                console.log('Cancel');
            }
        })
    };

    render(){
        return (
            <div>
                <Button onClick={this.showConfirm}>Confirm</Button>
                <Space/>
                <Button onClick={this.showDeleteConfirm} type="dashed">Delete</Button>
            </div>
        )
    }
}

export default Demo3;