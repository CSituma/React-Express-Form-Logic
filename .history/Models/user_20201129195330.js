
const mongoose = require('mongoose')
const  userSchema = new mongoose.Schema(
{
name: { type: String},
email: { type: String, required: true },
password: { type: String, required: true },
Date: { type: Date, default: Date.now, immutable: true }
});
 
module.exports = User = mongoose.model('userModel', userSchema);
