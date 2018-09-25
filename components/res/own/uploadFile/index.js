import React from 'react';
import ReactDom from 'react-dom';
import './style/index.less';

export default class uploadFile extends React.Component{

    constructor(props){
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount(){
        // this.onChange();
    }

    onChange = () => {
        const fileInput = this.ref.current;
        const file = fileInput.files[0];
        if(file){
            const reader = new FileReader();
            reader.readAsArrayBuffer(file);
            reader.onload = () => {
                const arrayBuffer = reader.result;
                this.props.onChange(arrayBuffer);
            };
        }else{
            this.props.onChange();
        }
    };

    render(){
        return (
            <input ref={this.ref} type='file' onChange={this.onChange}/>
        )
    }
}