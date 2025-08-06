require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const summaryRoutes = require('./routes/summaryRoutes');
const authRoutes = require('./routes/auth.routes');
const chatbotRoute = require('./routes/chatbot.route');
const assessmentRoutes = require('./routes/quizAssessment.route');
const contactDetailsRoute = require('./routes/contactDetails.route');

const app = express();
const teacherRoutes = require('./routes/admin.routes');
app.use('/api/teacher', teacherRoutes);


// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());

// Logger middleware (keep only once)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/SummaryCall', summaryRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/chatbot', chatbotRoute);
app.use('/api/assessment', assessmentRoutes);
app.use('/api/contact-details', contactDetailsRoute);

// MongoDB Connection
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
