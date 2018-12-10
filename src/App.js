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
      date: "",
      time: "",
      number: ""
    };

    this.updatePost = this.updatePost.bind ( this );
    this.deletePost = this.deletePost.bind ( this );
    this.createPost = this.createPost.bind ( this );
    this.handleChange = this.handleChange.bind ( this );
  }

  componentDidMount () {
  
  }
  createPost(){


  }

  updatePost () {


  }

  deletePost () {


  }

  handleChange(prop, val){
    this.setState({
      [prop]:val
    })
  }
    
  render() {
    console.log(this.state)
  
    return (
      <div className="App">
        
   

        <Nav/>
        <Invite
         host={this.state.host}
         team={this.state.team}
         location={this.state.location}
         date={this.state.date}
         time={this.state.time}
         number={this.state.number}
         handleChange={this.handleChange}
        
        />
        <Form/>
      </div>
    );
  }


}   


export default App;
