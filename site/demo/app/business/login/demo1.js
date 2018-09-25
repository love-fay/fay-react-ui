import React, {Component} from 'react';
import Login from 'rjd/login';
//import Scroll from 'rjd/scroll';
import Message from 'rjd/message';

class Demo1 extends Component {

    successLogin = ()=>{
        Message.success('登录成功');
    };
    controlDownload=()=>{
        Message.success('控件下载');
    };

    render() {
        return (
            <div style={{position:'fixed', top: '0', left:'0', right: '0', bottom: '0'}} width='100%'>
                <Login successLogin={this.successLogin} controlDownload={this.controlDownload}/>
            </div>
        );
    }
}

export default Demo1;