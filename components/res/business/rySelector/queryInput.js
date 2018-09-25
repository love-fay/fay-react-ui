/**
 * Created by Administrator on 2018/5/21.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";

const stylePrefix = 'rj-rySelector-queryInput';

function onChangeSearch(e, onChange) {
    this.setState({
        inputValue: e.target.value,
        inputTime: new Date()
    })
    setTimeout(()=> {
        let now = new Date();
        if (now - this.state.inputTime > 490) {
            onChange && onChange(this.state.inputValue);
        }
    }, 500);

}


export default class QueryInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            inputTime: new Date(),
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.value != this.props.value){
            this.setState({inputValue:nextProps.value})
        }
    }

    componentDidUpdate(){
        document.querySelector('.'+stylePrefix+"-input").size = document.querySelector('.'+stylePrefix+"-input").value.length == 0 ? 1:4;
    }

    keyupHandler = (e) => {
        if(e.keyCode == 8){
            this.props.onBackspace && this.props.onBackspace() ;
        }
    }


    render() {



        return (
            <div className={stylePrefix}>
                <input className={stylePrefix+"-input"}
                       value={this.state.inputValue}
                       onChange={e => onChangeSearch.call(this, e, this.props.onChange)}
                       onKeyUp={this.keyupHandler}
                       size="1"
                />
            </div>
        );
    }

}

QueryInput.prototypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onBackspace:PropTypes.func,
}