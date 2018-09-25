import React, { Component } from 'react';
import AyTreeSelect from 'rjd/ayTreeSelect';

class Demo3 extends Component {
    state ={
        value:undefined,
    };

    onChange = (value)=>{
        this.setState({value});
    };

    render() {
        return (
            <div>
                <AyTreeSelect defAy={{ajlb:"1"}} showSearch multiple value={this.state.value} onChange={this.onChange}/>
                案由类别4位代码 : {this.state.value}
            </div>
        );
    }
}

export default Demo3;
