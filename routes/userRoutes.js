const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerConfig');
const { createUser, getUsers } = require('../controllers/userController');

router.post('/', upload.single('profile_pic'), createUser);
router.get('/', getUsers);

module.exports = router;
