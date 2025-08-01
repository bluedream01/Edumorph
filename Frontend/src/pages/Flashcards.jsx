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
    <div className="min-h-screen bg-background text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            to={`/chapters/${selectedClass}/${selectedBoard}/${subjectId}`}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Chapters
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-white">
            {chapter.title}
          </h1>
          <p className="text-muted-foreground">
            {subject?.name} • Class {selectedClass} {selectedBoard}
          </p>
          <div className="mt-4">
            <span className="text-sm text-muted-foreground">
              Card {currentIndex + 1} of {allFlashcards.length}
            </span>
            <div className="mt-6 flex gap-4 justify-center">
              <Link
                to={`/test/${selectedClass}/${selectedBoard}/${subjectId}/${chapterId}`}
              >
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Take Test
                </Button>
              </Link>
              <Link
                to={`/match/${selectedClass}/${selectedBoard}/${subjectId}/${chapterId}`}
                state={{ flashcards: allFlashcards }}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Play Match Game
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mb-4 space-y-2 text-yellow-400 text-sm">
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

        <div className="max-w-3xl mx-auto">
          {/* Flashcard Container */}
          <div
            className="relative w-full h-80 mb-8 cursor-pointer perspective-1000"
            onClick={flipCard}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
            >
              {/* Front Side */}
              <div className="absolute inset-0 w-full h-full backface-hidden">
                <div className="h-full w-full bg-[#1E2A48] text-white border border-[#1c2c44] rounded-2xl shadow-2xl shadow-black/30 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-sm text-gray-400 mb-2">Question</h3>
                  <p className="text-lg sm:text-xl font-semibold">
                    {currentFlashcard?.question}
                  </p>
                  <p className="mt-6 text-sm text-gray-500 italic">Click to see answer</p>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                <div className="h-full w-full bg-[#1E2A48] text-white border border-[#1c2c44] rounded-2xl shadow-2xl shadow-black/30 p-8 flex flex-col items-center justify-center text-center">
                  <h3 className="text-sm text-gray-400 mb-2">Answer</h3>
                  <p className="text-lg sm:text-xl font-semibold">
                    {currentFlashcard?.answer}
                  </p>
                  <p className="mt-6 text-sm text-gray-500 italic">Click to go back</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="outline"
              onClick={prevCard}
              disabled={currentIndex === 0}
              className="text-white border-gray-600 hover:bg-gray-800"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            <div className="flex space-x-2">
              {allFlashcards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsFlipped(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={nextCard}
              disabled={currentIndex === allFlashcards.length - 1}
              className="text-white border-gray-600 hover:bg-gray-800"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;
