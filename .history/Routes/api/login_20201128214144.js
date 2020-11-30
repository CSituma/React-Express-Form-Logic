
const express = require('express')
const router = express.Router();
const Login = require ('../../Models/login')
const bcrypt = require ('bcryptjs')



//@POST
//PRIVATE
//api/login"
router.post('/form', (req, res) => {
  console.log(req.body);

const data = req.body;
const newLogin = new Login(data);

  newLogin.save()
  .then (()=>{
     res.json({msg: "User Saved"})
  })
.catch(err => console.log(err))

  
})

module.exports = router;