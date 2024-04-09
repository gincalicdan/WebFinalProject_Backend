const mongoose = require('mongoose')

// Create schema for properties with a field for array of workspaces
const userSchema = new mongoose.Schema({
   name: String,
   phone: String,
   email: String,
   password: {
      type: String, 
      minlength: 6
   },
   role: String
},{collection:'users'});

// Export schema
module.exports = mongoose.model('user', userSchema)