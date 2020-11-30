
const mongoose = require('mongoose')
const  LoginSchema = new mongoose.Schema(
{
Register:{type:mongoose.Schema.Types.ObjectId, ref:'Register'},
email: { type: String, default: '', required: true },
password: { type: String, required: true },
Date: { type: Date, default: Date.now, immutable: true }
});
 
module.exports = Login = mongoose.model('userModel', loginSchema);
