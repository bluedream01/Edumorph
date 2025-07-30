import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCourseData } from "./data/courseData";
import { Button } from "./components/ui/button";
import { ArrowLeft } from "lucide-react";
import {RotateCw, Home} from "lucide-react"; 
import axios from "axios";
import Confetti from "react-confetti";

const TestPage = () => {
  const {
    class: selectedClass,
    board: selectedBoard,
    subjectId,
    chapterId,
  } = useParams();

  const courseData = getCourseData(selectedClass, selectedBoard);
  const subject = courseData?.subjects.find((s) => s.id === subjectId);
  const chapter = subject?.chapters.find((c) => c.id === chapterId);

  const [difficulty, setDifficulty] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const selectRandomFive = (arr) =>
    [...arr].sort(() => 0.5 - Math.random()).slice(0, 5);

  const startQuiz = (level) => {
    const levelQuestions = chapter?.flashcards?.[level] || [];
    const filtered = levelQuestions.filter((q) => q.options && q.answer);
    const randomFive = selectRandomFive(filtered);
    setDifficulty(level);
    setQuestions(randomFive);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
  };

  const handleOptionClick = (option) => {
    if (selectedOption !== null) return;

    setSelectedOption(option);
    const correct = option === questions[currentQuestionIndex].answer;
    if (correct) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  useEffect(() => {
    if (showResult) {
      const updateXP = async () => {
        try {
          const earnedXP = score * 20;
          await axios.post(
            "/api/auth/update-xp",
            { xp: earnedXP },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
        } catch (error) {
          console.error("Failed to update XP:", error);
        }
      };
      updateXP();
    }
  }, [showResult]);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0D1321] text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Chapter Not Found</h1>
          <Link
            to={`/chapters/${selectedClass}/${selectedBoard}/${subjectId}`}
            className="text-blue-500 underline"
          >
            Back to Chapters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D1321] text-white relative px-6 py-12">
      {showResult && score >= 4 && (
        <Confetti
          numberOfPieces={350}       // Reduce to ~80-120 for smoother animation
          recycle={false}            // Confetti stops after one burst
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: "fixed", top: 0, left: 0, width: "100%", overflowX: "hidden" }}
        />
      )}


      <div className="absolute top-6 left-6">
        <Link
          to={`/flashcards/${selectedClass}/${selectedBoard}/${subjectId}/${chapterId}`}
          className="inline-flex items-center text-sm text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Flashcards
        </Link>
      </div>

      <div className="max-w-4xl mx-auto pt-8">
        <h1 className="text-3xl font-bold text-center mb-10">
          {chapter.title} • Test
        </h1>

        {!difficulty ? (
          <div className="bg-[#11192C] px-10 py-12 rounded-2xl text-center shadow-xl">
            <h2 className="text-2xl font-semibold mb-8">Select Difficulty Level</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {["Beginner", "Intermediate", "Hard"].map((level) => (
                <button
                  key={level}
                  onClick={() => startQuiz(level.toLowerCase())}
                  className="flex-1 py-3 rounded-md border border-white text-white hover:bg-blue-600 transition-all"
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        ) : !showResult ? (
          <div className="bg-[#1C2333] border border-gray-700 p-8 rounded-xl shadow-lg">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2 text-gray-400">
                <span>
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <span>
                  {Math.round(
                    ((currentQuestionIndex + 1) / questions.length) * 100
                  )}
                  % Complete
                </span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full transition-all"
                  style={{
                    width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <p className="text-xl font-bold text-center my-8">
              {questions[currentQuestionIndex].question}
            </p>

            {/* Options */}
            <div className="space-y-3 mb-4">
              {questions[currentQuestionIndex].options.map((option, idx) => {
                const isAnswer = option === questions[currentQuestionIndex].answer;
                const isSelected = option === selectedOption;

                let optionClass =
                  "bg-[#1D253C] border border-gray-600 text-white hover:bg-[#2A3350]";
                if (selectedOption !== null) {
                  if (isAnswer) {
                    optionClass = "bg-green-600 border-green-400 text-white";
                  } else if (isSelected) {
                    optionClass = "bg-red-600 border-red-400 text-white";
                  } else {
                    optionClass =
                      "bg-[#1D253C] border border-gray-600 text-white opacity-60";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(option)}
                    disabled={selectedOption !== null}
                    className={`w-full text-left px-6 py-4 rounded-md transition-all duration-300 ${optionClass}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {selectedOption && questions[currentQuestionIndex].explanation && (
              <div className="mt-4 bg-[#2E3A59] text-blue-100 p-4 rounded-md text-sm">
                <strong>Explanation:</strong>{" "}
                {questions[currentQuestionIndex].explanation}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="mt-8 flex justify-between">
              <Button
                variant="outline"
                onClick={() => {
                  if (currentQuestionIndex > 0) {
                    setCurrentQuestionIndex((prev) => prev - 1);
                    setSelectedOption(null);
                  }
                }}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </Button>

              {currentQuestionIndex === questions.length - 1 && (
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setShowResult(true)}
                >
                  Finish Quiz
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center mt-20 relative">
            <div className="flex flex-col items-center gap-4">
              <div className="text-5xl">🏆</div>
              <h2 className="text-3xl font-bold text-white">
                {score >= 4 ? "Excellent!" : score >= 2 ? "Good Try!" : "Keep Practicing!"} 🎉
              </h2>
              <p className="text-4xl font-extrabold text-blue-400">
                {Math.round((score / questions.length) * 100)}%
              </p>
              <p className="text-lg text-gray-300">
                You scored {score} out of {questions.length} questions correctly
              </p>

              {/* Encouragement Box */}
              <div className="mt-6 bg-green-900 text-green-200 px-6 py-4 rounded-lg max-w-xl">
                {score >= 4 && (
                  <p>
                    You've demonstrated excellent understanding of the material. Keep up the great work!
                  </p>
                )}
                {score === 3 && (
                  <p>
                    You're getting there! Review the weak areas and try again to improve your score.
                  </p>
                )}
                {score < 3 && (
                  <p>
                    Don't worry! Go back, review the flashcards, and you'll improve with practice.
                  </p>
                )}
              </div>

              {/* Buttons */}
              

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => startQuiz(difficulty)}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  <RotateCw className="w-4 h-4" />
                  Try Again
                </button>

                <Link
                  to={`/chapters/${selectedClass}/${selectedBoard}/${subjectId}`}
                  className="flex items-center gap-2 px-6 py-3 bg-[#161B22] text-white border border-[#30363D] rounded-lg hover:bg-[#1f2630] transition"
                >
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </div>


              {/* Footer */}
              <p className="mt-8 text-sm text-gray-500">
                Quiz completed on {new Date().toLocaleDateString("en-IN")} <br />
                Want to improve? Review your study materials and try again!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
