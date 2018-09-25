import React,{Component} from 'react';
import Scroll from 'rjd/customScroll';
import Button from 'rjd/button';
import Select from 'rjd/select';
const Option = Select.Option;
import './index.less';

class Demo extends Component{

    constructor(props){
        super(props);
        this.abc = React.createRef();
    }

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

    onWheel = (e) => {
        // e.stopPropagation();
    };

    componentDidMount(){
        const dom = this.abc.current;
        console.log(dom.clientWidth, dom.scrollWidth);
        console.log(dom.clientHeight, dom.scrollHeight);
    }

    render(){
        return (
            <div style={{width:'500px', height: '500px', overflow: 'hidden'}} ref={this.abc}>
                <p>fay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
                <p>fay's scroll</p>
            </div>
        )
    }
}

export default Demo;