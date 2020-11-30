
const mongoose = require('mongoose')
const  LoginSchema = new mongoose.Schema(
{
user:{type:mongoose.Schema.Types.ObjectId, ref:'register'},
email: { type: String, default: '', required: true },
password: { type: String, required: true },
Date: { type: Date, default: Date.now, immutable: true }
});
 
module.exports = Login = mongoose.model('userModel', loginSchema);
