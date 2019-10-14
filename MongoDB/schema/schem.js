const mongoose = require("mongoose");
const Schema = mongoose.Schema
const userSchema = new Schema({
  fname:{
    type:String,
    required: true
  },
  lname:{
    type:String,
    required: true
  },
  add:{
   type: String
  },
  phno:{
    type:String,
    required:true,
    max:10,
    min:10
  },
  dob:{
    type: String,
    default: Date.now
  }
});
module.exports.userSchema = userSchema;
require("../methods/meth")
const User = mongoose.model("User",userSchema);
module.exports.User = User;