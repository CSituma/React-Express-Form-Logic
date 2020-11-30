import React, { Component } from "react";
import "./style.scss";
import axios from "axios";
import {Link} from "react-router-dom"

export default class Register extends Component {
state = {
name:"",
email:"",
password:"",
password2:""


  }

handleChange = (e) =>{

  this.setState({[e.target.name]:e.target.value})
      
  }


   submit = (e) =>{
    e.preventDefault();

    const payload = {
       name:this.state.name,
      email:this.state.email,
      password:this.state.password,
      password2:this.state.password2
    }

  axios({
    url: '/api/register/form',
    method: 'POST',
    data: payload
  })
    .then(()=> {
      console.log('user has been sent to the server')
      this.delete();
    })
    .catch(() => {
      console.log('Internal server error');
    });
  }
  

  delete = () => {
    this.setState({
      name: '',
      email:'',
      password: '',
      password2
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
              <input type="text" name="name" value = {this.state.name} onChange={this.handleChange} placeholder="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email"placeholder="email" autoComplete="true" value= {this.state.email} onChange={this.handleChange} />
            </div>
         
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password"placeholder="password" autoComplete="true" value= {this.state.password} onChange={this.handleChange} />
            </div>
         
            <div className="form-group">
              <label htmlFor="password2">Password2</label>
              <input type="password2" name="password2"placeholder="password2" autoComplete="true" value= {this.state.password2} onChange={this.handleChange} />
            </div>
         
             <button className="btn">login </button> 

     
          </form>
          <div className="toggler">
            Member?
          <Link to ="./login">Login</Link>
          </div>
        </div>
      
      

      </div>
    );
    }
}