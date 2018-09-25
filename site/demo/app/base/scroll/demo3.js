import React,{Component} from 'react';
import Scroll from 'rjd/scroll';
import Button from 'rjd/button';

class Demo1 extends Component{

    state = {
        html: []
    };

    handleClick = () => {
        let html = this.state.html;
        html.push(<p key={html.length}>fay's scroll</p>);
        this.setState({
            html: html
        })
    };

    render(){
        return (
            <Scroll style={{width:'300px'}} maxHeight={500}>
                <div style={{width:'500px'}}>
                    <p>fay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scroll</p>
                    <Button onClick={this.handleClick}>add text</Button>
                    <div>{this.state.html}</div>
                </div>
            </Scroll>
        )
    }
}

export default Demo1;