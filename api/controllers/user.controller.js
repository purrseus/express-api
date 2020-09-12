const bcrypt = require('bcrypt');

const User = require('../models/user.model');

module.exports.users = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: err });
  }
};

module.exports.create = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;      
  } catch (error) {
    console.log(err);
  }

  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    birthday: req.body.birthday,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.json({ message: error });
  }
};