import validator from 'validator';
import React, { Component } from "react";

/*
 * This class contains methods for validating fields using 'validator.js' library methods
 * See their docs here https://github.com/validatorjs/validator.js
 */

 export class Validate extends Component {
  
  validateEmail(email) {
    if (validator.isEmpty(email)) {
      return 'Email is required';
    } else if (!validator.isEmail(email)) {
      return 'Invalid Email';
    }
    return false;
  }

  validatePassword(password) {
    if (validator.isEmpty(password)) {
      return 'Password is required';
    } else if (!validator.isLength(password, { min: 8 })) {
      return 'Password should be minimum 8 characters';
    }
    return false;
  }
}

const validate = new Validate();

