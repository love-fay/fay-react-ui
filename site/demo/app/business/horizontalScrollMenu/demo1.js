import React, {Component} from "react";
import HorizontalScrollMenu from 'rjd/horizontalScrollMenu';

export default class Demo1 extends Component {

    handleClick = (e) => {
        console.log(e);
        let key = e.key;
        console.log(`当前点击的key：${key}`)
    };


    render() {
        return (
            <HorizontalScrollMenu
                sn={"BASE"}
                type={"APP"}
                menuClick={this.handleClick}
                // style={{float: 'left', width: '160px', height: '100%'}}
            />
        )
    }
}