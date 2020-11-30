
const express = require('express')
const router = express.Router();
const Register = require ('../../Models/Register')
const bcrypt = require ('bcryptjs')



//@POST
//PRIVATE
//api/login"
router.post('/form', (req, res) => {
  console.log(req.body);

const data = req.body;
const newRegister = new Register(data);

  newRegister.save()
  .then (()=>{
     res.json({msg: "User Saved"})
  })
.catch(err => console.log(err))

  
})

module.exports = router;