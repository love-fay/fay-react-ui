import React, { Component } from 'react';
import DqfjCascader from 'rjd/dqfjCascader';

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
                <DqfjCascader showSearch value={this.state.value} onChange={this.onChange}/>
                福建地区代码 : {this.state.value}
            </div>
        );
    }
}

export default Demo1;
