const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  responses: [
    {
      subject: { type: String, required: true },
      answers: [{ questionId: String, answer: String }]
    }
  ],
  resultLevels: {
    type: Map,
    of: String, // Beginner, Intermediate, Expert
    default: {}
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Assessment', AssessmentSchema);
