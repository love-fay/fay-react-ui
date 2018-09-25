import React, { Component } from 'react';
import FyTreeSelect from 'rjd/fyTreeSelect';

class Demo2 extends Component {
    state ={
        value:undefined,
    };

    onChange = (value)=>{
        this.setState({value});
    };

    render() {
        return (
            <div>
                <FyTreeSelect multiple showSearch value={this.state.value} onChange={this.onChange}/>
                法院分级码 : {this.state.value}
            </div>
        );
    }
}

export default Demo2;
