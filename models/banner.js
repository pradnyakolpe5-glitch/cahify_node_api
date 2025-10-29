const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Banner = sequelize.define('Banner', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  image: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING },
});

module.exports = Banner;
