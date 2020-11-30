import React, { Component } from "react";
import loginImg from "../../login.gif";
import "./style.scss";
import axios from "axios";
import {Link} from "react-router-dom"
import {validate} from "./validation"

import classnames from 'classnames';




export default class Login extends Component {
state = {
  email: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  password: {
    value: '',
    validateOnChange: false,
    error: ''
  },
  submitCalled: false,
  allFieldsValidated: false
}

  

handleChange = (e) =>{

  this.setState({[e.target.name]:e.target.value})
  validate.validateEmail
  validate.validatePassword
      
  }


   submit = (e) =>{
    e.preventDefault();

    const payload = {
      email:this.state.email,
      password:this.state.password
    }

  axios({
    url: '/api/login/form',
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
          <div className="card-body">
            {allFieldsValidated && (
              <p className="text-success text-center">
                Success, All fields are validated
              </p>
            )}

          <form className="form" onSubmit = {this.submit} >
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input type="text" name="email" 
              value = {this.state.email} 
              onChange={this.handleChange}
              className={classnames(
                'form-control',
                { 'is-valid': email.error === false },
                { 'is-invalid': email.error }
              )}
               placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" 
              name="password"placeholder="password"
               autoComplete="true" 
               value= {this.state.password} 
               className={classnames(
                'form-control',
                { 'is-valid': password.error === false },
                { 'is-invalid': password.error }
              )}
               onChange={this.handleChange} />
            </div>
            <div className="invalid-feedback">{password.error}</div>
         
             <button className="btn">login </button> 


          </form>
          <div className="toggler">
            New Here?
          <Link to ="./register">Sign up</Link>
          </div>
        </div>
      
        </div>

      </div>
    );
    }
}