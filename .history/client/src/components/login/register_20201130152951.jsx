import React, { Component, createElement } from "react";
import "./style.scss";
import axios from "axios";
import {Link} from "react-router-dom"
import {TextField} from "@material-ui/core"



export default class Register extends Component {

  
state = {
username:"",
usernameerror:"",
email:"",
emailerror:"",
password:"",
passworderror:"",
errors:'',
confirm:false

  }

handleChange = (e) =>{

  this.setState({[e.target.name]:e.target.value})
 
 
  }

validatefields = () =>{
  let errors = {}
  let isError = false

  if (!this.state.username.trim()) {
    isError = true;
    errors.username= 'Username is required';
  }
   else if (!/^[A-Za-z]+/.test(this.state.username.trim())) {
     isError = true
    errors.username = 'Enter a valid name';
  }


  if (!this.state.email) {
    isError = true;
    errors.email = 'Email is required';
  } 
  else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
    isError = true;
    errors.email = 'Email address is invalid';
  }

  if (!this.state.password.trim()) {
    isError = true;
    errors.password = 'Password is required';
  }
   else if (this.state.password.length < 6) {
    isError = true;
    errors.password = 'Password needs to be atleast 6 characters';
  }

    if(isError)
    {this.setState(
      {emailerror:errors.email, 
      passworderror:errors.password,
      usernameerror:errors.username})}

  return isError;


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
    url: '/api/login/form',
    method: 'POST',
    data: payload
  })
    .then(()=> {
      console.log('user has been sent to the server')

      this.sucessmessage();
      this.delete();
    })
    .catch(err => {
      console.log(err.message);
    });

    
    }
   }



    sucessmessage = () =>{

  
       if (confirm("Registration Sucessfuul!")) {
         txt = "LOG IN";
       } else {
         txt = "EDIT";
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
              <TextField
               type="text" name="username"
               value = {this.state.username}
               onChange={this.handleChange} placeholder="name" 
               InputProps={{ disableUnderline: true }}
               error
               helperText
               ={this.state.usernameerror}
               
               />
               <div> {this.state.message}</div>
            </div>
           
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <TextField
                type="email" 
              name="email"placeholder="email" 
                value= {this.state.email}
               onChange={this.handleChange}
               InputProps={{ disableUnderline: true }}
               error
               helperText
               ={this.state.emailerror} />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              < TextField 
               type="password" 
              name="password"placeholder="password"
               autoComplete="true" value= {this.state.password}
                onChange={this.handleChange} 
                InputProps={{ disableUnderline: true }}
                error
                helperText
                ={this.state.passworderror}/>
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