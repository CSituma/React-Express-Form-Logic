
const express = require('express')
const router = express.Router();
const Form = require ('../../Models/form')


//@POST
//PRIVATE
//api/login"
router.post('/form', (req, res) => {
  console.log(req.body);

  Form.findOne({
    username:req.username.body,
    password:req.password.body
  })
  .then ((form =>{
     return form.save().json({msg: "User Saved"})
  }))
.catch(err => console.log(err))

  
})

module.exports = router;