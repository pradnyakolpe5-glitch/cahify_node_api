const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerConfig');
const { createCategory, getCategories } = require('../controllers/categoryController');

router.post('/', upload.single('image'), createCategory);
router.get('/', getCategories);

module.exports = router;
