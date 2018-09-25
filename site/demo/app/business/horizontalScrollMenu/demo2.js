import React, {Component} from "react";
import HorizontalScrollMenu from 'rjd/horizontalScrollMenu';

export default class Demo1 extends Component {

    handleClick = (e) => {
        let key = e.key;
        console.log(`当前点击的key：${key}`)
    };

    render() {
        return (
            <HorizontalScrollMenu
                sn={"case on file"}
                type={"MENURESOURCE"}
                menuClick={this.handleClick}
                style={{float: 'left', width: '160px', height: '100%'}}
            />
        )
    }
}