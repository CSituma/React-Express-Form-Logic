
const express = require('express')
const router = express.Router();
const Form = require ('../../Models/form')


//@POST
//PRIVATE
//api/login"
router.post('/form', (req, res) => {
  console.log(req.body);
const newForm = new Form;
const data = req.body;

  newForm.save(data)
  .then (()=>{
     res.json({msg: "User Saved"})
  })
.catch(err => console.log(err))

  
})

module.exports = router;