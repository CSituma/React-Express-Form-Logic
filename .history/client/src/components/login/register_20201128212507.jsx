import React, { Component } from "react";
import loginImg from "../../login.gif";
import "./style.scss";
import axios from "axios";

export default class register extends Component {
state = {
username:"",
password:""

  }

handleChange = (e) =>{

  this.setState({[e.target.name]:e.target.value})
      
  }


   submit = (e) =>{
    e.preventDefault();

    const payload = {
      username:this.state.username,
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
      username: '',
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
              <label htmlFor="username">Username</label>
              <input type="text" name="username" value = {this.state.username} onChange={this.handleChange} placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password"placeholder="password" autoComplete="true" value= {this.state.password} onChange={this.handleChange} />
            </div>
         
             <button className="btn">login </button> 


          </form>
        </div>
      
      

      </div>
    );
    }
}