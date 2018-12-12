import React, {Component} from 'react'
import axios from 'axios'
import DatePickerInput from './DatePicker'


class Form extends Component {
    constructor (props){
        super(props);
        this.state = {
            parties: []
        
        }
       this.handleChange = thisHandleChange.bind (this)
    
    }

    componentDidMount(){
        axios.get('/api/party').then(res=>{
            this.setState({parties:res.data})
        })
    
    }
    editPost(host, team, location, date, number) {
        axios.put('/api/party', {host, team, location, date, number}).then(res=>{
            this.setState({parties:res.data})
        })
    }
   // createPost(host, team, location, date, number) {
   //     axios.put('/api/party', {host, team, location, date, number}).then(res=>{
   //         this.setState({parties:res.data})
   //     })
   // }
   // deletePost(host, team, location, date, number) {
   //     axios.put('/api/party', {host, team, location, date, number}).then(res=>{
   //         this.setState({parties:res.data})
   //     })
   handleChange(prop, val){
    this.setState({
      [prop]:val
   }
   }

    render () {
        const {}
        let partiesList = this.state.parties.map(party =>{
            return <div>
                <h1>Past Watch Party List</h1>
                <h1>{party.host}</h1>
                <h1>{party.team}</h1>
                <h1>{party.location}</h1>
                <h1>{party.date}</h1>
                <h1>{party.number}</h1>
            <div>
            <h1>Invite</h1>
            <input placeholder="Host" onChange={(e) => props.handleChange('host', e.target.value) } type="text"/>
                <input placeholder="Team" onChange={(e) => props.handleChange('team', e.target.value) } type="text"/>
                <input placeholder="Location" onChange={(e) => props.handleChange('location', e.target.value) } type="text"/>
                <DatePickerInput/>
                <input placeholder="Number Attending" onChange={(e) => props.handleChange('number', e.target.value) } type="text"/></div>
        </div>
            })
        return(
            <div>{partiesList}</div>
        )
    }

}



export default Form;