const express = require('express');
const router = express.Router();
const multer = require('multer');

const { getUsers, addUser } = require('../controllers/userController.js');


const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
  });
  const upload = multer({ storage });
  
  router.get('/', getUsers);
  router.post('/', upload.single('profilePic'), addUser);
  
  module.exports = router;