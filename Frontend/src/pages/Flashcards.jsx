// All your imports remain the same
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseData } from "./data/courseData";
import { Button } from "./components/ui/button";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Lock,
} from "lucide-react";
import axios from "axios";
import TestPage from "./TestPage";

const Flashcards = () => {
  const {
    class: selectedClass,
    board: selectedBoard,
    subjectId,
    chapterId,
  } = useParams();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userXP, setUserXP] = useState(0);

  useEffect(() => {
    const fetchUserXP = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token found");

        const res = await axios.get("/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserXP(res.data?.xp || 0);
      } catch (error) {
        console.error("Error fetching user XP", error);
      }
    };

    fetchUserXP();
  }, []);

  const courseData = getCourseData(selectedClass, selectedBoard);
  const subject = courseData?.subjects.find((s) => s.id === subjectId);
  const chapter = subject?.chapters.find((c) => c.id === chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-card-foreground mb-4">
            Chapter Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The selected chapter is not available.
          </p>
          <Link
            to={`/chapters/${selectedClass}/${selectedBoard}/${subjectId}`}
            className="text-primary hover:underline"
          >
            Back to Chapters
          </Link>
        </div>
      </div>
    );
  }

  const beginnerFlashcards = chapter.flashcards.beginner || [];
  const intermediateFlashcards =
    userXP >= 200 ? chapter.flashcards.intermediate || [] : [];
  const hardFlashcards = userXP >= 500 ? chapter.flashcards.hard || [] : [];

  const allFlashcards = [
    ...beginnerFlashcards,
    ...intermediateFlashcards,
    ...hardFlashcards,
  ];

  const currentFlashcard = allFlashcards[currentIndex];

  const nextCard = () => {
    if (currentIndex < allFlashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen bg-[#0c1326] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Back link */}
        <div className="mb-6">
          <Link
            to={`/chapters/${selectedClass}/${selectedBoard}/${subjectId}`}
            className="inline-flex items-center text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Chapters
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold mb-2">{chapter.title}</h1>
          <p className="text-muted-foreground">
            {subject?.name} • Class {selectedClass} {selectedBoard}
          </p>
          <div className="mt-4 flex gap-4 justify-center flex-wrap">
            <Link to={`/test/${selectedClass}/${selectedBoard}/${subjectId}/${chapterId}`}>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Take Test</Button>
            </Link>
            <Link
              to={`/match/${selectedClass}/${selectedBoard}/${subjectId}/${chapterId}`}
              state={{ flashcards: allFlashcards }}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Play Match Game</Button>
            </Link>
          </div>
        </div>

        {/* XP-based unlocks */}
        <div className="text-center text-yellow-500 text-sm mb-8 space-y-2">
          {userXP < 200 && chapter.flashcards.intermediate?.length > 0 && (
            <div className="flex items-center justify-center">
              <Lock className="w-4 h-4 mr-1" />
              Intermediate flashcards are locked (need 200 XP).
            </div>
          )}
          {userXP < 500 && chapter.flashcards.hard?.length > 0 && (
            <div className="flex items-center justify-center">
              <Lock className="w-4 h-4 mr-1" />
              Hard flashcards are locked (need 500 XP).
            </div>
          )}
        </div>

        {/* Flashcard */}
        <div className="max-w-4xl mx-auto mb-10">
          <div
            className="relative w-full h-[400px] cursor-pointer perspective-1000"
            onClick={flipCard}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 w-full h-full backface-hidden">
                <div className="h-full bg-[#111d3b] rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl">
                  <h3 className="text-gray-400 text-sm mb-2">Question</h3>
                  <p className="text-xl font-semibold text-white text-center leading-relaxed">
                    {currentFlashcard?.question}
                  </p>
                  <div className="mt-8 text-sm text-gray-400 flex items-center">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Click to reveal answer
                  </div>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                <div className="h-full bg-[#111d3b] rounded-2xl p-8 flex flex-col items-center justify-center shadow-xl">
                  <h3 className="text-gray-400 text-sm mb-2">Answer</h3>
                  <p className="text-xl font-semibold text-white text-center leading-relaxed">
                    {currentFlashcard?.answer}
                  </p>
                  <div className="mt-8 text-sm text-gray-400 flex items-center">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Click to go back
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={prevCard}
            disabled={currentIndex === 0}
            className="flex items-center"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <Button
            variant="outline"
            onClick={nextCard}
            disabled={currentIndex === allFlashcards.length - 1}
            className="flex items-center"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;