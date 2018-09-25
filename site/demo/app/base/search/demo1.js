import React, {Component} from 'react';
import Search from 'rjd/search';
import Icon from 'rjd/icon'

export default class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <Search
                placeholder="名称"
                suffix={<Icon type="close" onClick={()=> this.setState({value:''})}/>}
                value={this.state.value}
                onChange={ e => this.setState({value: e.target.value})}
                onDelayChange={value => console.log(value)}
                delay={500}
            />
        )
    }

}