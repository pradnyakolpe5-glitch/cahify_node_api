const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Contact = sequelize.define('Contact', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  mobile: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  status: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING },
}, { timestamps: true });

module.exports = Contact;
