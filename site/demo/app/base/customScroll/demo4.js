import React,{Component} from 'react';
import Scroll from 'rjd/customScroll';

class Demo extends Component{

    render(){
        return (
            <div style={{width: '600.52px', height: '600px', border:'1px solid #000000'}}>
                <Scroll style={{width: '600.53px', height: '100%'}}>
                    <div style={{width: '611.54px', paddingBottom:'50px'}}>
                    </div>
                    <div style={{width: '613.44px', paddingBottom:'50px'}}>
                        <div style={{width: '612.54px', paddingBottom:'50px'}}>
                        </div>
                    </div>
                    <div style={{width: '612.54px', paddingBottom:'50px'}}>
                    </div>
                </Scroll>
            </div>
        )
    }
}

export default Demo;