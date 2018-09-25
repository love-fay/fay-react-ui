import React,{Component} from 'react';
import Scroll from 'rjd/customScroll';
import Button from 'rjd/button';
import Select from 'rjd/select';
const Option = Select.Option;
import './index.less';

class Demo extends Component{

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

    render(){
        return (
            <Scroll className='fay-test' style={{width: '50%'}} overflowX={false}>
                <div style={{width:'500px'}}>
                    <p>fay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scrollfay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <p>fay's scroll</p>
                    <div style={{width:'200px', height:'200px', overflow: 'auto'}} onWheel={this.onWheel}>
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
                    <div onWheel={this.onWheel}>

                    <Select style={{width: '100px'}}>
                        <Option value={1}>1</Option>
                        <Option value={2}>2</Option>
                        <Option value={3}>3</Option>
                        <Option value={4}>4</Option>
                        <Option value={5}>5</Option>
                        <Option value={6}>6</Option>
                        <Option value={11}>11</Option>
                        <Option value={21}>21</Option>
                        <Option value={31}>31</Option>
                        <Option value={41}>41</Option>
                        <Option value={51}>51</Option>
                        <Option value={61}>61</Option>
                        <Option value={12}>12</Option>
                        <Option value={22}>22</Option>
                        <Option value={32}>32</Option>
                        <Option value={42}>42</Option>
                        <Option value={52}>52</Option>
                        <Option value={62}>62</Option>
                        <Option value={13}>13</Option>
                        <Option value={23}>23</Option>
                        <Option value={33}>33</Option>
                        <Option value={43}>43</Option>
                        <Option value={53}>53</Option>
                        <Option value={63}>63</Option>
                        <Option value={14}>14</Option>
                        <Option value={24}>24</Option>
                        <Option value={34}>34</Option>
                        <Option value={44}>44</Option>
                        <Option value={54}>54</Option>
                        <Option value={64}>64</Option>
                        <Option value={15}>15</Option>
                        <Option value={25}>25</Option>
                        <Option value={35}>35</Option>
                        <Option value={45}>45</Option>
                        <Option value={55}>55</Option>
                        <Option value={65}>65</Option>
                        <Option value={16}>16</Option>
                        <Option value={26}>26</Option>
                        <Option value={36}>36</Option>
                        <Option value={46}>46</Option>
                        <Option value={56}>56</Option>
                        <Option value={66}>66</Option>
                    </Select>
                    </div>
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

export default Demo;