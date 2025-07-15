const express = require('express');
const router = express.Router();
const { claimPoints, getUserHistory } = require('../controllers/claimController.js');

router.post('/:userId', claimPoints);
router.get('/history/:userId', getUserHistory);

module.exports = router;