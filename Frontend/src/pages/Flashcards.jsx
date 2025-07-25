import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseData } from "./data/courseData";
import { Button } from "./components/ui/button";
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

const Flashcards = () => {
  const {
    class: selectedClass,
    board: selectedBoard,
    subjectId,
    chapterId
  } = useParams();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const courseData = getCourseData(selectedClass, selectedBoard);
  const subject = courseData?.subjects.find(s => s.id === subjectId);
  const chapter = subject?.chapters.find(c => c.id === chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-card-foreground mb-4">Chapter Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The selected chapter is not available.
          </p>
          <Link to={`/chapters/${selectedClass}/${selectedBoard}/${subjectId}`} className="text-primary hover:underline">
            Back to Chapters
          </Link>
        </div>
      </div>
    );
  }

  // Flatten all flashcards by difficulty
  const allFlashcards = [
    ...(chapter.flashcards.beginner || []),
    ...(chapter.flashcards.intermediate || []),
    ...(chapter.flashcards.hard || [])
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
    <div className="min-h-screen bg-background">
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
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-2">
            {chapter.title}
          </h1>
          <p className="text-muted-foreground">
            {subject?.name} • Class {selectedClass} {selectedBoard}
          </p>
          <div className="mt-4">
            <span className="text-sm text-muted-foreground">
              Card {currentIndex + 1} of {allFlashcards.length}
            </span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Flashcard */}
          <div
            className="relative w-full h-80 mb-8 cursor-pointer perspective-1000"
            onClick={flipCard}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
            >
              {/* Front of card (Question) */}
              <div className="absolute inset-0 w-full h-full backface-hidden">
                <div className="h-full bg-card border border-border rounded-xl p-8 flex flex-col items-center justify-center shadow-lg hover:shadow-card transition-shadow duration-300">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-muted-foreground mb-4">Question</h3>
                    <p className="text-xl font-semibold text-card-foreground leading-relaxed">
                      {currentFlashcard?.question}
                    </p>
                  </div>
                  <div className="mt-8 text-sm text-muted-foreground flex items-center">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Click to reveal answer
                  </div>
                </div>
              </div>

              {/* Back of card (Answer) */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                <div className="h-full bg-primary/5 border border-primary/20 rounded-xl p-8 flex flex-col items-center justify-center shadow-lg">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-primary mb-4">Answer</h3>
                    <p className="text-xl font-semibold text-card-foreground leading-relaxed">
                      {currentFlashcard?.answer}
                    </p>
                  </div>
                  <div className="mt-8 text-sm text-muted-foreground flex items-center">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Click to see question
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevCard}
              disabled={currentIndex === 0}
              className="flex items-center"
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
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
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
              className="flex items-center"
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
