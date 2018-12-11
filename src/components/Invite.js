import React from 'react'
import DatePickerInput from './DatePicker'

function Invite (props) {


return (
    <div>
    <h1>Invite</h1>
    <input placeholder="Host" onChange={(e) => props.handleChange('host', e.target.value) } type="text"/>
        <input placeholder="Team" onChange={(e) => props.handleChange('team', e.target.value) } type="text"/>
        <input placeholder="Location" onChange={(e) => props.handleChange('location', e.target.value) } type="text"/>
        <DatePickerInput/>
        <input placeholder="Number Attending" onChange={(e) => props.handleChange('number', e.target.value) } type="text"/></div>

)
}

export default Invite;