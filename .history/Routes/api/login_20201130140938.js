
const express = require('express')
const router = express.Router();
const {SecretOrKey} = require('../../config/keys')
const bcrypt = require ('bcryptjs');
const jwt = require ('jsonwebtoken');
const User = require('../../Models/user');


//@POST
//@PRIVATE
//@api/login
router.post('/form', (req, res) => {
  console.log(req.body);


//Registering User////////

  const data = req.body;
  const newUser = new User(data);


  //validation//
if (!data.email||!data.password){
  return res.status(400).json({msg:"Please Fill in the blank fields"})
}

User.findOne({email:req.body.email})
.then(user => {
  if(user)
  {return res.status(400).json({msg:"user already exists!"})}
  else
  {

bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash(newUser.password, salt, function(err, hash) {
      
 newUser.password = hash;
 newUser.save()
    .then (()=>{
       res.json({msg: "User Saved"})
    })
  .catch(err => console.log(err))

  });
});

  }
})


  
})

///Login////
router.post('./loginuser', (req, res) => {
  
  const email = req.body.email;
  const password = req.body.password;

User.findOne({email})
.then(user =>{
 if(!user){return res.status(404).json({email:"user not found"})}

else if(user){

  bcrypt.compare(password, user.password)
  .then(isMatch => {
   if(isMatch)
   {
 
  jwt.sign(user.payload,SecretOrKey,{expiresIn:3600},(err,token)=>{
         

      
    res.json({success:true, token:"Bearer"+token})

  })

   }
   else res.status(404).json({password: "Password is incorrect"})

  })


}
});
})











module.exports = router;