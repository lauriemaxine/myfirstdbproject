import React from 'react'

function Invite (props) {


return (
    <div>
    <h1>Invite</h1>
    <input placeholder="Host" onChange={(e) => props.handleChange('host', e.target.value) } type="text"/>
        <input placeholder="Team" onChange={(e) => props.handleChange('team', e.target.value) } type="text"/>
        <input placeholder="Location" onChange={(e) => props.handleChange('location', e.target.value) } type="text"/>
        <input placeholder="Date" onChange={(e) => props.handleChange('date', e.target.value) } type="text"/>
        <input placeholder="Time" onChange={(e) => props.handleChange('time', e.target.value) } type="text"/>
        <input placeholder="Number Attending" onChange={(e) => props.handleChange('number', e.target.value) } type="text"/></div>

)
}

export default Invite;