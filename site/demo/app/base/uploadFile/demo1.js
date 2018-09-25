import React,{Component} from 'react';
import UploadFile from 'rjd/uploadFile';
import Button from 'rjd/button';
import {post} from 'rj-lib/fetch';

class Demo extends Component{

    file;

    onChange = (value) => {
        // const blob = new Blob([value]);
        // console.log(typeof blob);
        // console.log(value);
        // console.log(Array.from(value));
        // console.log(new Int8Array(value));
        console.log(Array.from(new Int8Array(value)));
        // console.log(Array.from(new Int16Array(value)));
        // console.log(new Int32Array(Array.from(new Int8Array(value))));
        console.log(Int8Array.from(value));
        // this.file = Array.from(new Int8Array(value));
        this.file = Array.from(new Int8Array(value));
    };

    onSubmit = () => {
        const data={
            b: '1',
            a: this.file,
            c: ['1', '2']
        };
        console.log(data);
        // post({
        //     path: '/test/uploadFile',
        //     data,
        // })
    };

    render(){
        return (
            <div>
                <UploadFile onChange={this.onChange}/>
                <Button onClick={this.onSubmit}>提交</Button>
            </div>
        )
    }
}

export default Demo;