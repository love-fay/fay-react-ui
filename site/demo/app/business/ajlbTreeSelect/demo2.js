import React, { Component } from 'react';
import AjlbTreeSelect from 'rjd/ajlbTreeSelect';

class Demo2 extends Component {

    state ={
        value:undefined,
    };

    onChange = (value, lable, map)=>{
        console.log(value);
        console.log(lable);
        console.log(map);
        console.log(map.get(value[1]));
        console.log(map.get(value[2]));
        this.setState({value});
    };
    render() {
        return (
            <div>
                <AjlbTreeSelect multiple value={this.state.value} onChange={this.onChange}/>
                案件类别4位代码 : {this.state.value}
            </div>
        );
    }
}

export default Demo2;
