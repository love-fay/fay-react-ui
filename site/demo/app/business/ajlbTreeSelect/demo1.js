import React, { Component } from 'react';
import AjlbTreeSelect from 'rjd/ajlbTreeSelect';

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
                  <AjlbTreeSelect defAjlb={{value:"0200"}} value={this.state.value} onChange={this.onChange}/>
                  案件类别4位代码 : {this.state.value}
            </div>
        );
    }
}

export default Demo1;
