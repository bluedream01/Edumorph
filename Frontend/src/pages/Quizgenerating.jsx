import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './quizgenerating.css';

const QuizGenerating = () => {
  const location = useLocation();
  const { difficulty, numQuestions } = location.state || {};

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const fetchQuizData = async () => {
      const sampleData = [
        {
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Rome"],
          correctAnswer: "Paris"
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Venus"],
          correctAnswer: "Mars"
        },
        {
          question: "What is the boiling point of water?",
          options: ["90°C", "100°C", "110°C", "120°C"],
          correctAnswer: "100°C"
        },
        {
          question: "Who painted the Mona Lisa?",
          options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
          correctAnswer: "Da Vinci"
        }
      ];

      const count = parseInt(numQuestions);
      const quiz = !isNaN(count) ? sampleData.slice(0, count) : sampleData;
      setQuestions(quiz);
    };

    fetchQuizData();
  }, [difficulty, numQuestions]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    const correct = questions[currentQuestion].correctAnswer;
    if (selectedOption === correct) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(null); // Clear selection when going back
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="quiz-finished">
          <h2>Quiz Completed! 🎉</h2>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
      ) : (
        questions.length > 0 && (
          <div className="quiz-card">
            <div className="quiz-progress">
              <div className="quiz-progress-text">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <progress value={currentQuestion + 1} max={questions.length}></progress>
            </div>

            <h2 className="quiz-question">{questions[currentQuestion].question}</h2>

            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => (
                <label
                  key={index}
                  className={`quiz-option ${selectedOption === option ? 'selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="option"
                    checked={selectedOption === option}
                    onChange={() => handleOptionSelect(option)}
                  />
                  {option}
                </label>
              ))}
            </div>

            <div className="button-container">
              <button
                className="quiz-prev-btn"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </button>
              <button
                className="quiz-next-btn"
                onClick={handleNext}
                disabled={!selectedOption}
              >
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default QuizGenerating;