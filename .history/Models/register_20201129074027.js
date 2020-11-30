
const mongoose = require('mongoose')
const  registerSchema = new mongoose.Schema(
{
name: { type: String, default: '', required: true },
email: { type: String, default: '', required: true },
password: { type: String, required: true },
Date: { type: Date, default: Date.now, immutable: true }
});
 
module.exports = Register = mongoose.model('userModel', registerSchema);
