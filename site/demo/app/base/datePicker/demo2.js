import React, {Component} from 'react';
import DatePicker from 'rjd/date-picker';
const {RangePicker} = DatePicker;

class Demo2 extends Component{

    onChange = (value, dateString) => {
        console.log(value, dateString);
        console.log('Selected Time:', value);
        console.log('Formatted Selected Time:', dateString);
    };

    onOk = (value) => {
        console.log('onOk:', value);
    };

    render(){
        return (
            <div>
                <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder='Select Time'
                    onChange={this.onChange}
                    onOk={this.onOk}/>
                <br/>
                <RangePicker
                    showTime={{format:'HH:mm'}}
                    format="YYYY-MM-DD HH:mm"
                    placeholder={['Start Time', 'End Time']}
                    onChange={this.onChange}
                    onOk={this.onOk}/>
            </div>
        )
    }
}

export default Demo2;