
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const instagramRoute = require('./routes/instagram')
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

app.use('/api/instagram', instagramRoute);

// Test Route
app.get('/', (req, res) => {
  res.send('👋 API is live with MongoDB!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});