// controllers/userController.js
const User = require('../models/User.js');

const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

const addUser = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const profilePic = req.file ? `/uploads/${req.file.filename}` : '';

    const newUser = new User({ name, profilePic });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Add user error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { getUsers, addUser };
