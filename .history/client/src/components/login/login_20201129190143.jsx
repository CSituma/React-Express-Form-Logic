import React, { Component } from "react";
import loginImg from "../../login.gif";
import "./style.scss";
import axios from "axios";
import {Link} from "react-router-dom"

export default class Login extends Component {
state = {
email:"",
password:""

  }

handleChange = (e) =>{

  this.setState({[e.target.name]:e.target.value})
      
  }


   submit = (e) =>{
    e.preventDefault();

    const payload = {
      email:this.state.email,
      password:this.state.password
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
    .catch(() => {
      console.log('Internal server error');
    });
  }
  

  delete = () => {
    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
  console.log(this.state)

    return (
      <div className="form-container">
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt="loginimage" />
          </div>
          <form className="form" onSubmit = {this.submit} >
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input type="text" name="email" value = {this.state.email} onChange={this.handleChange} placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password"placeholder="password" autoComplete="true" value= {this.state.password} onChange={this.handleChange} />
            </div>
         
             <button className="btn">Login</button> 


          </form>
          <div className="toggler">
            New Here?
          <Link to ="./register">Sign up</Link>
          </div>
        </div>
      
      

      </div>
    );
    }
}