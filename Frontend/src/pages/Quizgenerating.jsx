import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import { useLocation, useNavigate } from 'react-router-dom';

export default function QuizApp() {
  const location = useLocation();
  const navigate = useNavigate();

  const { questions = [] } = location.state || {};

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [answered, setAnswered] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef(null);
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });

  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = selectedOptions[currentQuestionIndex] || null;
  const isAnswered = answered[currentQuestionIndex];
  const correctAnswer = currentQuestion?.correctAnswer;
  const percentage = (score / questions.length) * 100;

  const isPerfect = percentage >= 90;
  const isGreat = percentage >= 70 && percentage < 90;
  const isAverage = percentage >= 50 && percentage < 70;
  const isPoor = percentage < 50;

  useLayoutEffect(() => {
    if (showResult && resultRef.current) {
      const rect = resultRef.current.getBoundingClientRect();
      setCardSize({ width: rect.width, height: rect.height });
    }
  }, [showResult]);

  useEffect(() => {
    if (!questions || questions.length === 0) {
      alert("No questions found. Redirecting to quiz setup.");
      navigate('/');
    }
  }, [questions, navigate]);

  const handleAnswerSelect = (option) => {
    if (answered[currentQuestionIndex]) return;

    setSelectedOptions((prev) => ({ ...prev, [currentQuestionIndex]: option }));
    setAnswered((prev) => ({ ...prev, [currentQuestionIndex]: true }));

    if (option === correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions({});
    setAnswered({});
    setScore(0);
    setShowResult(false);
  };

  if (!questions || questions.length === 0 || !currentQuestion) return null;

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center px-4 py-10">
      {!showResult ? (
        <div className="w-full max-w-2xl space-y-8">
          <div className="flex justify-between items-center text-sm text-gray-400">
            <button onClick={() => navigate('/')}>{`< Back to Setup`}</button>
            <div>{Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}% Complete</div>
          </div>

          <div className="text-lg font-semibold text-blue-300">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold">{currentQuestion.question}</h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === option;
              let bgClass = 'bg-[#1e293b] hover:bg-[#334155]';

              if (isAnswered) {
                if (option === correctAnswer) bgClass = 'bg-green-600';
                else if (isSelected) bgClass = 'bg-red-600';
              } else if (isSelected) {
                bgClass = 'bg-blue-600';
              }

              return (
                <div
                  key={idx}
                  onClick={() => handleAnswerSelect(option)}
                  className={`cursor-pointer px-5 py-4 rounded-md flex items-center justify-between ${bgClass}`}
                >
                  <span>{option}</span>
                  <div className={`w-5 h-5 border rounded-full ${isSelected ? 'bg-white' : ''}`}></div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevious}
              className="bg-gray-700 px-5 py-2 rounded-md disabled:opacity-50"
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md"
              disabled={!isAnswered}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div
          className="text-center w-full max-w-xl space-y-6 relative"
          ref={resultRef}
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {percentage >= 60 && (
            <Confetti
              width={cardSize.width}
              height={cardSize.height}
              numberOfPieces={300}
              gravity={0.3}
              recycle={false}
            />
          )}

          <div className="text-5xl text-blue-400">🏆</div>
          <h2 className="text-3xl font-bold">Quiz Completed! 🎉</h2>

          {isPerfect && <h3 className="text-green-400 font-semibold text-xl">Perfect Score! 🏅</h3>}
          {isGreat && <h3 className="text-yellow-300 font-semibold text-xl">Great Job! 🎯</h3>}
          {isAverage && <h3 className="text-blue-300 font-semibold text-xl">Good Effort ✨</h3>}
          {isPoor && <h3 className="text-red-400 font-semibold text-xl">Needs Improvement 😔</h3>}

          <p className="text-5xl font-extrabold text-blue-500">{Math.round(percentage)}%</p>
          <p className="text-gray-400">You scored {score} out of {questions.length} questions</p>

          <div className="bg-green-900 text-green-200 px-6 py-4 rounded-lg">
            Keep practicing to improve your score!
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleRetry}
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-700 px-5 py-2 rounded-md"
            >
              Back to Home
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Quiz completed on {new Date().toLocaleDateString()}
          </p>
          <p className="text-xs text-gray-600">
            Want to improve? Review your study materials and try again!
          </p>
        </div>
      )}
    </div>
  );
}
