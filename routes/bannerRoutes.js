const express = require('express');
const router = express.Router();
const upload = require('../middleware/multerConfig');
const { createBanner, getBanners } = require('../controllers/bannerController');

router.post('/', upload.single('image'), createBanner);
router.get('/', getBanners);

module.exports = router;
