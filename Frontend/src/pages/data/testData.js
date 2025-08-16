export const testSubjects = [
  { id: 'mathematics', name: 'Mathematics', icon: '🔢', color: 'from-green-500 to-green-600' },
  { id: 'physics', name: 'Physics', icon: '⚛️', color: 'from-purple-500 to-purple-600' },
  { id: 'chemistry', name: 'Chemistry', icon: '🧪', color: 'from-yellow-500 to-yellow-600' },
  { id: 'biology', name: 'Biology', icon: '🧬', color: 'from-pink-500 to-pink-600' },
  { id: 'history', name: 'History', icon: '🏛️', color: 'from-orange-500 to-orange-600' },
  { id: 'geography', name: 'Geography', icon: '🌍', color: 'from-teal-500 to-teal-600' },
];

// Class 10 Questionnaire
export const testQuestions = [
  { id: 1, question: "State Newton’s First Law of Motion with one example.", answer: "Newton’s First Law states that an object will remain at rest or move in a straight line with uniform speed unless acted upon by an external force.\nExample: A book lying on a table remains at rest until someone pushes it.", subject: "physics", marks: 2 },
  { id: 2, question: "Define GST. Name its two main types.", answer: "GST is a Goods and Services Tax, a single indirect tax on the supply of goods and services.\nTypes:\nCGST – Central Goods and Services Tax\nSGST – State Goods and Services Tax", subject: "mathematics", marks: 2 },
  { id: 3, question: "Give two differences between work and power.", answer: "Work: Product of force and displacement, Measured in Joules\nPower: Rate of doing work, Measured in Watts", subject: "physics", marks: 2 },
  { id: 4, question: "What is meant by acceleration due to gravity? State its value on Earth.", answer: "It is the acceleration produced in a body due to Earth’s gravitational force.\nValue: g = 9.8 m/s²", subject: "physics", marks: 2 },
  { id: 5, question: "State the Modern Periodic Law.", answer: "The Modern Periodic Law states that the physical and chemical properties of elements are the periodic functions of their atomic numbers.", subject: "chemistry", marks: 2 },
  { id: 6, question: "Write one difference between ionic and covalent bonds.", answer: "Ionic bond – formed by transfer of electrons.\nCovalent bond – formed by sharing of electrons.", subject: "chemistry", marks: 2 },
  { id: 7, question: "Calculate the work done when a force of 50 N moves an object by 4 m in the direction of force.", answer: "Work done = Force × Displacement\nW = 50 × 4 = 200 J", subject: "physics", marks: 2 },
  { id: 8, question: "Name any two factors affecting GST rates.", answer: "1. Type of product or service\n2. Government policy and exemptions", subject: "mathematics", marks: 2 },
  { id: 9, question: "Why do objects continue to move once they start moving in space?", answer: "In space, there is no air resistance or significant external force, so according to Newton’s First Law, the object continues moving in a straight line at constant speed.", subject: "physics", marks: 2 },
  { id: 10, question: "Describe the formation of a covalent bond in a water molecule with a neat diagram.", answer: "A covalent bond is formed when two atoms share electrons to complete their outer shell.\nIn water (H₂O):\n- Each hydrogen atom has 1 electron and needs 1 more.\n- Oxygen has 6 valence electrons and needs 2 more to complete its octet.\n- Each hydrogen shares its electron with oxygen, forming two single covalent bonds.\nDiagram:\nH–O–H with two lone pairs on oxygen.", subject: "chemistry", marks: 4 },
];

// ✅ Updated: Select random questions until total marks ≤ maxMarks
export const getTestQuestions = (subjects, maxMarks) => {
  const filteredQuestions = testQuestions.filter(q => subjects.includes(q.subject));
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);

  let selected = [];
  let totalMarks = 0;

  for (let q of shuffled) {
    if (totalMarks + q.marks <= maxMarks) {
      selected.push(q);
      totalMarks += q.marks;
    }
    if (totalMarks >= maxMarks) break;
  }

  return selected;
};

export const getStudyPlan = (result) => {
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
