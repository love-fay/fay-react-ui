import React, { Component } from 'react';
import FyTreeSelect from 'rjd/fyTreeSelect';

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
                <FyTreeSelect multiple showSearch defFy={{value:"c"}} value={this.state.value} onChange={this.onChange}/>
                法院分级码 : {this.state.value}
            </div>
        );
    }
}

export default Demo3;
