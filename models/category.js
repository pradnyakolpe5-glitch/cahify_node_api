const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  image: { type: DataTypes.STRING },
  category_name: { type: DataTypes.STRING },
});

module.exports = Category;
