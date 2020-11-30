const mongoose = require ('mongoose');
const db = require ('./Keys').mongoURI;

  const connectDB = () =>{mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true
      }
    ).then( () =>console.log("Mongo connected"))
    .catch(err => console.log(err));}

    module.exports = connectDB;
 

