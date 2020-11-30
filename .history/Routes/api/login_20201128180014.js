
const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');

//@POST
//PRIVATE
//api/login"
router.post('/form', (req, res) => {
  console.log(req.body);
  
  res.json({msg: "Details received"})
})

module.exports = router;