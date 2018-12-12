import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav.js'
import Invite from './components/Invite.js'
import Form from './components/Form.js'




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      host: "",
      team: "",
      location: "",
      number: ""
    };
  //  this.updateEdit = this.updateEdit.bind ( this );
   // this.updateCreate = this.updateCreate.bind ( this );
   // this.updateDelete = this.updateDelete.bind ( this );
     this.handleChange = this.handleChange.bind ( this );
  }

  handleChange(prop, val){
    this.setState({
      [prop]:val
    })
  
    
  render() {
    console.log(this.state)
  
    return (
      <div className="App">
    
        <Nav/>
        <Invite
         host={this.state.host}
         team={this.state.team}
         location={this.state.location}
         number={this.state.number}
         handleChange={this.handleChange}
    
        />
 
        <Form/>
      </div>
    );
  }


  }  


export default App;
