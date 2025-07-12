const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');

dotenv.config();
const app = express(); // ✅ Define app first

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ✅ Serve static files from 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const formRoutes = require('./Routes/FormRoutes');
const authRoutes = require('./Routes/authRoutes');
const eventRoutes = require('./Routes/eventRoutes');

app.use('/api', formRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

// MongoDB Connection & Server Start
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(5000, () => console.log('✅ Server started on port 5000')))
  .catch(err => console.error('❌ DB connection error:', err));
