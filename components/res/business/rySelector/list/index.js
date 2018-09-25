/**
 * Created by Administrator on 2018/5/22.
 */
import React, {Component} from "react";
import List from "../../../../list";
import classnames from "classnames";
import "./style/index.less";


export default class ListWithKeyEvent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    componentDidMount() {
        document.body.addEventListener("keyup", this.keyupHandler);
    }

    componentWillUnmount() {
        document.body.removeEventListener("keyup", this.keyupHandler);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.dataSource.length != nextProps.dataSource.length) {
            this.setState({selectedIndex: 0})
        }
    }

    keyupHandler = (e) => {
        e.stopImmediatePropagation();
        if (e.keyCode == 40) {
            //向下方向键
            let {selectedIndex} = this.state;
            if (selectedIndex < this.props.dataSource.length) {
                selectedIndex++;
                this.setState({selectedIndex});
            }
        } else if (e.keyCode == 38) {
            //向上方向键
            let {selectedIndex} = this.state;
            if (selectedIndex > 1) {
                selectedIndex--;
                this.setState({selectedIndex});
            }
        } else if (e.keyCode == 13) {
            //回车
            let {selectedIndex} = this.state;
            if (selectedIndex > 0) {
                this.props.onEnterPress(this.props.dataSource[selectedIndex - 1]);
            }

        }
    }

    render() {
        // let newProps = Object.assign({}, this.props);
        // delete newProps.onEnterPress;
        let {onEnterPress,renderItem,...listProps} = this.props;
        let i = 0;
        return (
            <List {...listProps}
                  renderItem={item => {
                      i++;
                      return (
                          <div
                              className={classnames({'rj-list-onSelect': this.state.selectedIndex == i})}>{renderItem(item)}</div>
                      )
                  }
                  }
            />
        )

    }


}