const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const sequelize = require('./config/db');

dotenv.config();

const app = express();
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


const userRoutes = require('./routes/userRoutes');
const bannerRoutes = require('./routes/bannerRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const contactRoutes = require('./routes/contactRoutes');


app.use('/api/users', userRoutes);
app.use('/api/banners', bannerRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/contacts', contactRoutes);

app.get('/', (req, res) => res.send('CacheFly API Running...'));

sequelize.sync({ alter: true })
  .then(() => console.log('Database & Tables Synced'))
  .catch(err => console.log('Error syncing:', err));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
