import React, { Component } from "react";
import "./style.scss";
import axios from "axios";
import {Link} from "react-router-dom"



export default class Register extends Component {

  
state = {
username:"",
email:"",
password:"",
errors:'',

  }

handleChange = (e) =>{

  this.setState({[e.target.name]:e.target.value})
 
 
  }

validatefields = (e) =>{
  let errors = {}


  if (!this.state.username.trim()) {
    errors.username = 'Username is required';
  }
   else if (!/^[A-Za-z]+/.test(this.state.username.trim())) {
    errors.name = 'Enter a valid name';
  }


  if (!this.state.email) {
    errors.email = 'Email required';
  } 
  else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!this.state.password) {
    errors.password = 'Password is required';
  }
   else if (this.state.password.length < 6) {
    errors.password = 'Password needs to be atleast 6 characters';
  }

  return errors;


}
   submit = (e) =>{
    e.preventDefault();

   const error = this.validatefields()

   if (!error){
    const payload = {
       username:this.state.username,
      email:this.state.email,
      password:this.state.password,
     
    }

  axios({
    url: '/api/login/loginuser',
    method: 'POST',
    data: payload
  })
    .then(()=> {
      console.log('user has been sent to the server')
      this.delete();
    })
    .catch(err => {
      console.log(err.message);
    });
    }
   }

  delete = () => {
    this.setState({
      name: '',
      email:'',
      password: '',
    });
  };

  render() {
  console.log(this.state)

    return (
      <div className="form-container">
        <div className="header">Register</div>
        <div className="content">
          <form className="form" onSubmit = {this.submit} >
            <div className="form-group">
              <label htmlFor="name">name</label>
              <input type="text" name="username" value = {this.state.username} onChange={this.handleChange} placeholder="name" />
            </div>
        
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email"placeholder="email" autoComplete="true" value= {this.state.email} onChange={this.handleChange} />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password"placeholder="password" autoComplete="true" value= {this.state.password} onChange={this.handleChange} />
            </div>
         
          
             <button className="btn">Register </button> 

     
          </form>
          <div className="toggler">
            Member?
          <Link to ="./">Login</Link>
          </div>
        </div>
      
      

      </div>
    );
    }
}