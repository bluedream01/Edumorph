require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const summaryRoutes = require('./routes/summaryRoutes');
const authRoutes = require('./routes/auth.routes');
const chatbotRoute = require('./routes/chatbot.route');

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(express.json());

// Logger middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Logger middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/SummaryCall', summaryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chatbot', chatbotRoute);

// 🔗 MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
});
