const Assessment = require('../models/assessment.model');

function determineLevel(answers) {
  const correctCount = answers.filter((a) => a.isCorrect).length;
  if (correctCount >= 4) return 'Expert';
  if (correctCount >= 2) return 'Intermediate';
  return 'Beginner';
}

exports.submitAssessment = async (req, res) => {
  try {
    const { userId, responses } = req.body;

    // Compute subject levels
    const resultLevels = {};
    for (let { subject, answers } of responses) {
      resultLevels[subject] = determineLevel(answers);
    }

    const assessment = new Assessment({
      userId,
      responses,
      resultLevels,
    });

    await assessment.save();

    res.status(201).json({ message: 'Assessment saved', resultLevels });
  } catch (err) {
    console.error('Assessment submission error:', err);
    res.status(500).json({ message: 'Failed to submit assessment' });
  }
};

exports.getUserAssessment = async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await Assessment.findOne({ userId }).sort({ createdAt: -1 });
    if (!result) return res.status(404).json({ message: 'No assessment found' });

    res.status(200).json(result);
  } catch (err) {
    console.error('Get assessment error:', err);
    res.status(500).json({ message: 'Failed to fetch assessment' });
  }
};
