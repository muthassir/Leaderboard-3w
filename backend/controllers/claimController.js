const User = require('../models/User.js');
const ClaimHistory = require('../models/Claim.js');

// claim points 
exports.claimPoints = async (req, res) => {
  const { userId } = req.params;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.totalPoints += points;
  await user.save();

  const history = new ClaimHistory({ userId, points });
  await history.save();

  res.json({ points, updatedUser: user }); 
};


// get history
exports.getUserHistory = async (req, res) => {
  const { userId } = req.params;
  const history = await ClaimHistory.find({ userId }).sort({ claimedAt: -1 });
  res.json(history);
};
