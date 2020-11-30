
const passport = require ('passport')
const {SecretOrKey} = require('./keys')
const mongoose = require('mongoose')
const JwtStrategy = require('passport-jwt').Strategy,
     ExtractJwt = require('passport-jwt').ExtractJwt;   

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SecretOrKey;


module.exports = Passport = () => {

passport.use(new JwtStrategy(opts, (jwt_payload, done)=> {
    User.findById({jwt_payload.id})
    .then(user => {
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);

    }})
    .catch(err => {console.log(err)});

  }))
      
      
}     
      
      

