const bcrypt = require('bcrypt');

const User = require('../models/user.model');

module.exports.users = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.findById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.search = async (req, res) => {
  const query = req.query.name;
  try {
    const users = await User.find();
    const filterUsers = users.filter((user) => {
      return user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    res.json(filterUsers);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.create = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    const savedUser = await User.create(req.body);
    res.json(savedUser); 
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.update = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: { password: req.body.password } }
    );
    res.json(updatedUser);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.id });
    res.json(removedUser);
  } catch (error) {
    res.json({ message: error });
  }
};