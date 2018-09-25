import React, {Component} from 'react';
import DatePicker from 'rjd/date-picker';
const {MonthPicker, RangePicker, WeekPicker} = DatePicker;

class Demo1 extends Component{

    onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    render(){
        return (
            <div>
                <DatePicker onChange={this.onChange}/>
                <br/>
                <MonthPicker onChange={this.onChange} placeholder='Select month'/>
                <br/>
                <RangePicker onChange={this.onChange}/>
                <br/>
                <WeekPicker onChange={this.onChange} placeholder='Select week'/>
                <br/>
            </div>
        )
    }
}

export default Demo1;