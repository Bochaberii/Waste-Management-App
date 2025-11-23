require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/users');
const listingRoutes = require('./routes/listings');
const transactionRoutes = require('./routes/transactions');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', userRoutes);
app.use('/api/listings', listingRoutes);
app.use('/api/transactions', transactionRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running',
    timestamp: new Date(),
    mongodb: 'Connected'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Taka Bora Waste Management API',
    endpoints: {
      health: '/api/health',
      users: '/api/users',
      producers: '/api/users/producer',
      consumers: '/api/users/consumer',
      listings: '/api/listings',
      webhook: '/api/webhook/clerk'
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: err.message
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 MongoDB URI: ${process.env.MONGODB_URI ? 'Configured' : 'Not configured'}`);
  console.log('\n📍 Available endpoints:');
  console.log(`   GET  http://localhost:${PORT}/api/health`);
  console.log(`   GET  http://localhost:${PORT}/api/users`);
  console.log(`   GET  http://localhost:${PORT}/api/users/producer`);
  console.log(`   GET  http://localhost:${PORT}/api/users/consumer`);
  console.log(`   POST http://localhost:${PORT}/api/webhook/clerk`);
  console.log('\n');
});
