const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  username: {
    type: String,
    require: true
  },

  birthday: {
    type: String,
    require: true
  },

  gender: {
    type: String,
    require: true
  },

  email: {
    type: String,
    require: true
  },

  phone: {
    type: String,
    require: true
  },

  password: {
    type: String,
    require: true
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;