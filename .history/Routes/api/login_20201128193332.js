
const express = require('express')
const router = express.Router();
const Form = require ('../../Models/form')


//@POST
//PRIVATE
//api/login"
router.post('/form', (req, res) => {
  console.log(req.body);
  
  const data = req.body;
  const requiredinfo = new Form;

  res.json({msg: "Details received"})
})

module.exports = router;