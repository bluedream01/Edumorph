import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
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
  const [answered, setAnswered] = useState({});

  const resultCardRef = useRef(null);
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });

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

  useLayoutEffect(() => {
    if (showResult && resultCardRef.current) {
      const rect = resultCardRef.current.getBoundingClientRect();
      setCardSize({ width: rect.width, height: rect.height });
    }
  }, [showResult]);

  const handleOptionSelect = (option) => {
    if (answered[currentQuestion]) return;

    setSelectedOptions((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));

    setAnswered((prev) => ({
      ...prev,
      [currentQuestion]: true,
    }));

    const correct = questions[currentQuestion].correctAnswer;
    if (option === correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
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

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOptions({});
    setScore(0);
    setShowResult(false);
    setAnswered({});
  };

  const selectedOption = selectedOptions[currentQuestion] || null;
  const isAnswered = answered[currentQuestion];
  const correctAnswer = questions[currentQuestion]?.correctAnswer;

  const percentage = (score / questions.length) * 100;
  const showConfetti = showResult && percentage >= 60;

  const isPerfectScore = percentage >= 90;
  const isGreatScore = percentage >= 70 && percentage < 90;
  const isAverageScore = percentage >= 50 && percentage < 70;
  const isPoorResult = percentage < 50;

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="quiz-finished" ref={resultCardRef} style={{ position: 'relative', overflow: 'hidden' }}>
          {showConfetti && (
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 2,
              }}
            >
              <Confetti
                width={cardSize.width}
                height={cardSize.height}
                numberOfPieces={200}
                gravity={0.3}
                recycle={false}
              />
            </div>
          )}

          <h2>Quiz Completed!</h2>
          {isPerfectScore && <h3 className="perfect-score">Perfect Score! 🏆</h3>}
          {isPoorResult && <h3 className="poor-result">Poor Result 😔 Try Again!</h3>}
          {isAverageScore && (
            <h3 className="average-score">Good Job! ✨ You can do even better!</h3>
          )}
          {isGreatScore && (
            <h3 className="great-score">Great Work! 🎯</h3>
          )}
          <p>Your Score: <span className="score-value">{score}</span> / {questions.length}</p>
          <button className="quiz-restart-btn" onClick={handleRestart}>
            Re-attempt Quiz
          </button>
          <button className="quiz-home-btn" onClick={() => navigate('/quizzes')}>
            Go to Quiz Home
          </button>
        </div>
      ) : (
        questions.length > 0 &&
        questions[currentQuestion] && (
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
                let className = "quiz-option";

                if (isAnswered) {
                  if (option === correctAnswer) {
                    className += " correct";
                  } else if (option === selectedOption) {
                    className += " incorrect";
                  }
                } else if (option === selectedOption) {
                  className += " selected";
                }

                return (
                  <label key={id} htmlFor={id} className={className}>
                    <input
                      type="radio"
                      id={id}
                      name={`question-${currentQuestion}`}
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => handleOptionSelect(option)}
                      disabled={isAnswered}
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
                disabled={!isAnswered}
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
