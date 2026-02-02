const mongoose = require( 'mongoose' );
const userSchema = new mongoose.Schema( {
  name: {
    type: "string",
    required: true
  },
  age: {
    type: "number",
    required: true,
  },
  email: {
    type: "String",
    required: true
  },
} )
module.exports = mongoose.model( "User", userSchema );