const Category = require('../models/category');

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create({
      image: req.file ? req.file.filename : null,
      category_name: req.body.category_name
    });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
