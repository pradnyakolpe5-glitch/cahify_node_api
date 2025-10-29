const Banner = require('../models/banner');

exports.createBanner = async (req, res) => {
  try {
    const banner = await Banner.create({
      image: req.file ? req.file.filename : null,
      title: req.body.title
    });
    res.json(banner);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBanners = async (req, res) => {
  try {
    const banners = await Banner.findAll();
    res.json(banners);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
