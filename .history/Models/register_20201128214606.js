
const mongoose = require('mongoose')
const  registerSchema = new mongoose.Schema(
{
username: { type: String, default: '', required: true },

password: { type: String, default: '', required: true },

Date: { type: Date, default: Date.now, immutable: true }
});
 
module.exports = Register = mongoose.model('registerModel', registerSchema);
