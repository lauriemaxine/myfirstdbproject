import React, {Component} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

export default class DatePickerInput extends Component{

    state = {
        startDate: new Date()
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        })
    }
    render(){
        return(
            <div>
            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            dateFormat="Pp"
            />
            </div>
        )
    }
}