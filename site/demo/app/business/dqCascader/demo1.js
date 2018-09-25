import React, { Component } from 'react';
import DqCascader from 'rjd/dqCascader';

class Demo1 extends Component {
    state ={
        value:undefined,
    };

    onChange = (value)=>{
        this.setState({value});
    };

    render() {
        return (
            <div>
                <DqCascader showSearch value={this.state.value} onChange={this.onChange}/>
                地区代码 : {this.state.value}
            </div>
        );
    }
}

export default Demo1;
