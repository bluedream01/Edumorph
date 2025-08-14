export const testSubjects = [
  { id: 'english', name: 'English', icon: '📚', color: 'from-blue-500 to-blue-600' },
  { id: 'mathematics', name: 'Mathematics', icon: '🔢', color: 'from-green-500 to-green-600' },
  { id: 'physics', name: 'Physics', icon: '⚛️', color: 'from-purple-500 to-purple-600' },
  { id: 'chemistry', name: 'Chemistry', icon: '🧪', color: 'from-yellow-500 to-yellow-600' },
  { id: 'biology', name: 'Biology', icon: '🧬', color: 'from-pink-500 to-pink-600' },
  { id: 'history', name: 'History', icon: '🏛️', color: 'from-orange-500 to-orange-600' },
  { id: 'geography', name: 'Geography', icon: '🌍', color: 'from-teal-500 to-teal-600' },
  { id: 'civics', name: 'Civics', icon: '⚖️', color: 'from-red-500 to-red-600' }
];

// Example: add questions for physics, chemistry, biology individually here...
export const testQuestions = [
  // Physics
  { id: 1, question: "Speed = Distance ÷ ______.", answer: "Time", subject: "physics", marks: 1 },
  { id: 2, question: "Unit of Force is ______.", answer: "Newton", subject: "physics", marks: 1 },

  // Chemistry
  { id: 3, question: "H2O is commonly known as ______.", answer: "Water", subject: "chemistry", marks: 1 },

  // Biology
  { id: 4, question: "Basic unit of life is the ______.", answer: "Cell", subject: "biology", marks: 1 },

  // English
  { id: 5, question: "The synonym of 'abundant' is ______.", answer: "plentiful", subject: "english", marks: 1 },

  // Mathematics
  { id: 6, question: "Square root of 144 is ______.", answer: "12", subject: "mathematics", marks: 1 },
  
  // (Add the rest of your questions here…)
];

export const getTestQuestions = (subjects, maxMarks) => {
  const filteredQuestions = testQuestions.filter(q => subjects.includes(q.subject));
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, maxMarks);
};

export const getStudyPlan = (result) => {
  // result.subjectScores should be like: { english: 80, physics: 40, chemistry: 90, ... }
  const { subjectScores } = result;

  const studyPlan = Object.keys(subjectScores).map(subject => {
    const percentage = subjectScores[subject];
    let priority = 'Medium';
    let topics = [];
    let recommendation = '';

    if (percentage < 40) priority = 'High';
    else if (percentage < 70) priority = 'Medium';
    else priority = 'Low';

    switch (subject) {
      case 'english':
        topics = percentage < 70 ? ['Grammar', 'Vocabulary', 'Literature'] : ['Advanced Writing'];
        recommendation = percentage < 70 ? 'Focus on grammar basics and vocabulary' : 'Practice creative writing';
        break;
      case 'mathematics':
        topics = percentage < 70 ? ['Algebra', 'Geometry', 'Arithmetic'] : ['Advanced Problem Solving'];
        recommendation = percentage < 70 ? 'Practice basic concepts daily' : 'Solve complex word problems';
        break;
      case 'physics':
        topics = percentage < 70 ? ['Mechanics', 'Optics', 'Electricity'] : ['Advanced Physics Problems'];
        recommendation = percentage < 70 ? 'Revise formulas and basic laws' : 'Focus on problem-solving';
        break;
      case 'chemistry':
        topics = percentage < 70 ? ['Atomic Structure', 'Periodic Table', 'Chemical Reactions'] : ['Organic Chemistry'];
        recommendation = percentage < 70 ? 'Understand basic concepts clearly' : 'Explore advanced reactions';
        break;
      case 'biology':
        topics = percentage < 70 ? ['Cell Biology', 'Human Anatomy', 'Ecology'] : ['Advanced Genetics'];
        recommendation = percentage < 70 ? 'Learn diagrams and key processes' : 'Focus on research-based topics';
        break;
      case 'history':
        topics = percentage < 70 ? ['Important Dates', 'Key Figures', 'Events'] : ['Historical Analysis'];
        recommendation = percentage < 70 ? 'Create timeline charts' : 'Practice analytical questions';
        break;
      case 'geography':
        topics = percentage < 70 ? ['World Map', 'Countries', 'Physical Features'] : ['Economic Geography'];
        recommendation = percentage < 70 ? 'Study maps regularly' : 'Focus on economic patterns';
        break;
      case 'civics':
        topics = percentage < 70 ? ['Constitution', 'Government', 'Rights'] : ['Current Affairs'];
        recommendation = percentage < 70 ? 'Learn constitutional articles' : 'Follow current political events';
        break;
      default:
        topics = ['Review All Topics'];
        recommendation = 'General review needed';
    }

    return { subject, priority, topics, recommendation };
  });

  return studyPlan.sort((a, b) => {
    const order = { High: 3, Medium: 2, Low: 1 };
    return order[b.priority] - order[a.priority];
  });
};

export const getResultComment = (percentage) => {
  if (percentage >= 90) return "Outstanding! You have excellent command over the subjects.";
  if (percentage >= 80) return "Great job! You're performing very well.";
  if (percentage >= 70) return "Good work! Keep practicing to improve further.";
  if (percentage >= 60) return "Fair performance. Focus on weak areas to improve.";
  if (percentage >= 40) return "You need to work harder. Review the concepts thoroughly.";
  return "Significant improvement needed. Consider seeking additional help.";
};
