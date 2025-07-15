const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profilePic: { type: String, default: '' },
  totalPoints: { type: Number, default: 0 }
});

module.exports = mongoose.model('Userleader', userSchema);