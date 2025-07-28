const express = require('express');
const router = express.Router();
const controller = require('../controllers/quizAssessment.controller');
const verifyToken = require('../middleware/auth.middleware');

// POST /api/assessment/submit
router.post('/submit', verifyToken, controller.submitAssessment);

// GET /api/assessment/:userId
router.get('/:userId', verifyToken, controller.getUserAssessment);

// POST /api/assessment/questions/:subject — returns dummy questions
router.post('/questions/:subject', verifyToken, (req, res) => {
  const { subject } = req.params;

  const dummyQuestions = [
    {
      questionId: 'q1',
      question: `Dummy question 1 for ${subject}`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'Option A',
    },
    {
      questionId: 'q2',
      question: `Dummy question 2 for ${subject}`,
      options: ['1', '2', '3', '4'],
      correctAnswer: '2',
    },
  ];

  res.status(200).json({ subject, questions: dummyQuestions });
});

module.exports = router;
