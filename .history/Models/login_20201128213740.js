
const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const  loginSchema = new mongoose.Schema(
{
username: { type: String, default: '', required: true },

password: { type: String, default: '', required: true },

Date: { type: Date, default: Date.now, immutable: true }
});
 
module.exports = Login = mongoose.model('formModel', loginSchema);
