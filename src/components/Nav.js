import React from 'react'
import football from './../assets/football.jpg'

function Nav (props) {
    return (
       <div>
        <h1>NFL Watch Party</h1>
        <p>Host choose the location and show up 30 minutes early to reserve a table.</p>
        <p>* The below locations are the only ones that have the NFL package.</p>
        <li>Buffalo Wild Wings</li>
        <li>Wayne and Larry's</li>
        <li>VFW</li>
       <img className='football-pic' style={{width: '400px', height: '300px'}} src= { football } alt="football"/>
       </div>
        
    )
}

export default Nav;