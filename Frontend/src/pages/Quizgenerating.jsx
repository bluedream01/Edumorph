import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './quizgenerating.css';

const QuizGenerating = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { difficulty, numQuestions, questions: passedQuestions } = location.state || {};

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (!passedQuestions || passedQuestions.length === 0) {
      navigate('/');
      return;
    }

    const transformed = passedQuestions.map((q) => ({
  question: q.question,
  options: q.options,
  correctAnswer: q.correctAnswer,
}));


    const count = parseInt(numQuestions);
    const limited = !isNaN(count) ? transformed.slice(0, count) : transformed;
    setQuestions(limited);
  }, [passedQuestions, numQuestions, navigate]);

  const handleOptionSelect = (option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));
  };

  const handleNext = () => {
    const selected = selectedOptions[currentQuestion];
    const correct = questions[currentQuestion].correctAnswer;

    if (selected === correct) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const selectedOption = selectedOptions[currentQuestion] || null;

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="quiz-finished">
          <h2>Quiz Completed! 🎉</h2>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
      ) : (
        questions.length > 0 && questions[currentQuestion] && (
          <div className="quiz-card">
            <div className="quiz-progress">
              <div className="quiz-progress-text">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <progress value={currentQuestion + 1} max={questions.length}></progress>
            </div>

            <h2 className="quiz-question">{questions[currentQuestion].question}</h2>

            <div className="quiz-options">
              {questions[currentQuestion].options.map((option, index) => {
                const id = `option-${currentQuestion}-${index}`;
                return (
                  <label
                    key={id}
                    htmlFor={id}
                    className={`quiz-option ${selectedOption === option ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      id={id}
                      name={`question-${currentQuestion}`}
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionSelect(option)}
                    />
                    {option}
                  </label>
                );
              })}
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
