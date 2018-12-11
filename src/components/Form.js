import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor (props){
        super(props)
        this.state = {
            parties: []
        }
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
   // }

    render () {
        let partiesList = this.state.parties.map(party =>{
            return <div>
                <h1>Past Watch Party List</h1>
                <h1>{party.host}</h1>
                <h1>{party.team}</h1>
                <h1>{party.location}</h1>
                <h1>{party.date}</h1>
                <h1>{party.number}</h1>
            </div>
        })
        return(
            <div>{
                partiesList}</div>
        )
    }

}



export default Form;