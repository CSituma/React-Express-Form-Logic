
const express = require('express')
const router = express.Router();


//@POST
//PRIVATE
//api/login"
router.post('/form', (req, res) => {
  console.log(req.body);
  
  const body = req.body;
  res.json({msg: "Details received"})
})

module.exports = router;