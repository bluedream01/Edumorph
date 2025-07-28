import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getCourseData } from "./data/courseData";
import { Button } from "./components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";

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
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const selectRandomFive = (arr) =>
    [...arr].sort(() => 0.5 - Math.random()).slice(0, 5);

  const startQuiz = (level) => {
    const levelQuestions = chapter?.flashcards?.[level] || [];
    const randomFive = selectRandomFive(levelQuestions);
    setDifficulty(level);
    setQuestions(randomFive);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption("");
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (
      selectedOption.trim().toLowerCase() ===
      currentQuestion.answer.trim().toLowerCase()
    ) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption("");
    } else {
      setShowResult(true);
    }
  };

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Chapter Not Found</h1>
          <Link
            to={`/chapters/${selectedClass}/${selectedBoard}/${subjectId}`}
            className="text-blue-600 underline"
          >
            Back to Chapters
          </Link>
        </div>
      </div>
    );
  }
  useEffect(() => {
    if (showResult) {
      const updateXP = async () => {
        try {
          const earnedXP = score * 10; // Customize XP formula
          await axios.post(
            "/api/auth/update-xp",
            { xp: earnedXP },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          console.log("XP updated successfully");
        } catch (error) {
          console.error("Failed to update XP:", error);
        }
      };

      updateXP();
    }
  }, [showResult]);

  return (
    <div className="min-h-screen bg-background px-4 py-8">
      <div className="container mx-auto max-w-xl">
        <div className="mb-4">
          <Link
            to={`/flashcards/${selectedClass}/${selectedBoard}/${subjectId}/${chapterId}`}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Flashcards
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6">{chapter.title} • Test</h1>

        {!difficulty ? (
          <div className="space-y-4">
            <p className="text-lg font-semibold">Select Difficulty:</p>
            <div className="flex gap-4">
              <Button onClick={() => startQuiz("beginner")}>Beginner</Button>
              <Button onClick={() => startQuiz("intermediate")}>
                Intermediate
              </Button>
              <Button onClick={() => startQuiz("hard")}>Hard</Button>
            </div>
          </div>
        ) : !showResult ? (
          <>
            <div className="bg-card border p-6 rounded-xl shadow">
              <p className="mb-4 text-lg font-medium">
                Q{currentQuestionIndex + 1}:{" "}
                {questions[currentQuestionIndex].question}
              </p>
              <input
                type="text"
                placeholder="Type your answer..."
                className="w-full p-2 border rounded-md mb-4"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              <Button onClick={handleSubmit} disabled={!selectedOption}>
                {currentQuestionIndex === questions.length - 1
                  ? "Finish"
                  : "Next"}
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-4">Test Completed 🎉</h2>
            <p className="text-lg">
              You scored <span className="font-semibold">{score}</span> out of{" "}
              <span className="font-semibold">{questions.length}</span>
            </p>
            <div className="mt-6 flex flex-col gap-4 items-center">
              <Button onClick={() => setDifficulty(null)}>
                Try Another Level
              </Button>
              <Link
                to={`/chapters/${selectedClass}/${selectedBoard}/${subjectId}`}
                className="inline-block"
              >
                <Button variant="outline">Back to Chapters</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestPage;
