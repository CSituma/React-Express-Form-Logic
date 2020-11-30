
const express = require('express')
const router = express.Router();
const Register = require ('../../Models/register');
const Login = require ('../../Models/register');
const Keys = require('../../config/keys')
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const user = require('../../Models/register');


//@POST
//@PRIVATE
//@api/login
router.post('/form', (req, res) => {
  console.log(req.body);


//Registering User////////
Register.findOne({email:req.body.email})
.then(user => {
  if(user)
  {return res.status(400).json({email:"user already exists!"})}
  else
  {
  const data = req.body;
const newRegister = new Register(data);

bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash(newUser.password, salt, function(err, hash) {
      
 newRegister.password = hash;
 newRegister.save()
    .then (()=>{
       res.json({msg: "User Saved"})
    })
  .catch(err => console.log(err))

  });
});


  
  }
})


  
})

///Login//
router.post('./loginuser', (req, res) => {
  
  const email = req.body.email;
  const password = req.body.password;

User.findOne({email})
.then(user =>{
 if(!user){return res.status(404).json({email:"user not found"})}
})

})











module.exports = router;