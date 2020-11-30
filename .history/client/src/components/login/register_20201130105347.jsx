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
  let values = e.target.name

  if (!values.name.trim()) {
    errors.name = 'Username is required';
  }
   else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    errors.name = 'Enter a valid name';
  }


  if (!values.email) {
    errors.email = 'Email required';
  } 
  else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }
   else if (values.password.length < 6) {
    errors.password = 'Password needs to be atleast 6 characters';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  }
   else if (values.password2 !== values.password) {
    errors.password2 = 'Passwords do not match';
  }
  return errors;


}
   submit = (e) =>{
    e.preventDefault();

   
    if (!errors){
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
    }}
  

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
              <input type="text" name="name" value = {this.state.username} onChange={this.handleChange} placeholder="name" />
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