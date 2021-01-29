'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  first_name: {
    type: String,
    required: 'Please enter the first name'
  },
  last_name: {
    type: String,
    required: 'Please enter the last name'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
        type: String,
        enum: ['happy', 'sad', 'focus', 'none']
    }],
    default: ['none']
  },
  email:{
    type:String,
    required: 'Please enter your email'
  },
  password: {
    type:String,
    required: 'Please enter your password'
  },
  permission_level: {
    type: [{
        type: String,
        enum: [ 'user', 'premium', 'admin']
    }],
    default:['user']
  }
});


module.exports = mongoose.model('Users', UserSchema);