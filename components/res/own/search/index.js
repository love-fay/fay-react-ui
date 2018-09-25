/**
 * Created by Administrator on 2018/6/22.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import Input from 'rjd/input'

let lastInputTime,inputValue;

function onChangeSearch(e, delay,onChange,onDelayChange) {
    onChange(e);
    lastInputTime = new Date();
    inputValue = e.target.value;
    setTimeout(()=> {
        let now = new Date();
        if (now - lastInputTime >= delay) {
            onDelayChange(inputValue);
        }
    }, delay);
}


export default class Search extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {delay,onChange,onDelayChange,...searchProps} = this.props;
        return (
            <Input {...searchProps}
                    onChange={e => onChangeSearch.call(this, e, delay,onChange,onDelayChange)}
            />
        )
    }
}

Search.propTypes = {
    delay: PropTypes.number,
    onChange: PropTypes.func,
}

Search.defaultProps = {
    delay: 500,
}