import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCourseData } from "./data/courseData";
import { Button } from "./components/ui/button";

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const FlashcardMatchGame = () => {
  const {
    class: selectedClass,
    board: selectedBoard,
    subjectId,
    chapterId,
  } = useParams();

  const [flashcards, setFlashcards] = useState([]);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [matchedIds, setMatchedIds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const data = getCourseData(selectedClass, selectedBoard);
    const subject = data.subjects.find((s) => s.id === subjectId);
    const chapter = subject?.chapters.find((c) => c.id === chapterId);

    const beginner = chapter?.flashcards?.beginner || [];
    const intermediate = chapter?.flashcards?.intermediate || [];
    const hard = chapter?.flashcards?.hard || [];
    const all = [...beginner, ...intermediate, ...hard].slice(0, 8); // Use only 4 pairs

    setFlashcards(all);
    const mixed = [];
    all.forEach((card, index) => {
      mixed.push({ ...card, id: index, type: "question" });
      mixed.push({ ...card, id: index, type: "answer" });
    });
    setShuffledCards(shuffleArray(mixed));
  }, [selectedClass, selectedBoard, subjectId, chapterId]);

  const handleCardClick = (card, index) => {
    setError(null);
    if (!selectedCard) {
      setSelectedCard({ ...card, index });
    } else if (selectedCard.index === index) {
      return; // Clicking the same card
    } else {
      if (selectedCard.id === card.id && selectedCard.type !== card.type) {
        setMatchedIds([...matchedIds, card.id]);
      } else {
        setError("Incorrect match! Try again.");
      }
      setSelectedCard(null);
    }
  };

  const isMatched = (card) => matchedIds.includes(card.id);
  const isSelected = (index) => selectedCard?.index === index;

  const allMatched = matchedIds.length === flashcards.length;

  return (
    <div className="min-h-screen p-8 bg-background text-card-foreground">
      <h1 className="text-3xl font-bold text-center mb-6">
        Flashcard Match Game
      </h1>

      {!allMatched && (
        <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
          {shuffledCards.map((card, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(card, index)}
              disabled={isMatched(card)}
              className={`p-4 h-28 rounded-xl border text-left transition whitespace-pre-line text-sm font-medium
                ${
                  isMatched(card)
                    ? "bg-green-200 text-green-800"
                    : isSelected(index)
                    ? "bg-blue-100 text-blue-800"
                    : "bg-card hover:bg-muted"
                }`}
            >
              {card.type === "question" ? card.question : card.answer}
            </button>
          ))}
        </div>
      )}

      {error && (
        <p className="text-center text-red-500 mt-4 font-semibold">{error}</p>
      )}

      {allMatched && (
        <div className="mt-10 text-center">
          <div className="bg-green-100 border border-green-300 rounded-2xl p-6 max-w-xl mx-auto shadow-md">
            <h2 className="text-2xl font-bold text-green-700 mb-3">
              🎉 Great job!
            </h2>
            <p className="text-green-600 text-lg mb-4">
              You've matched all flashcards correctly.
            </p>
            <Link
              to={`/flashcards/${selectedClass}/${selectedBoard}/${subjectId}/${chapterId}`}
            >
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl shadow-md transition">
                Review Flashcards
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlashcardMatchGame;
