const User = require('../models/user');

exports.createUser = async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
      profile_pic: req.file ? req.file.filename : null
    });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
