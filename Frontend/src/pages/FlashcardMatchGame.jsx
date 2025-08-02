import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { RotateCcw, ArrowLeft, Clock, Trophy, Repeat } from "lucide-react";
import { getCourseData } from "./data/courseData";
import Confetti from "react-confetti";

export default function MatchGame() {
  const { class: selectedClass, board: selectedBoard, subjectId, chapterId } = useParams();
  const [tiles, setTiles] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [startTime] = useState(Date.now());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [subjectTitle, setSubjectTitle] = useState("Chapter");
  const [gameWon, setGameWon] = useState(false);
  const [isRestarting, setIsRestarting] = useState(false);

  useEffect(() => {
    const data = getCourseData(selectedClass, selectedBoard);
    const subject = data.subjects.find((s) => s.id === subjectId);
    const chapter = subject?.chapters.find((c) => c.id === chapterId);

    setSubjectTitle(chapter?.name || "Chapter");

    const all = [
      ...(chapter?.flashcards?.beginner || []),
      ...(chapter?.flashcards?.intermediate || []),
      ...(chapter?.flashcards?.hard || []),
    ].slice(0, 6);

    const paired = [];
    all.forEach((card, index) => {
      paired.push({ id: `q-${index}`, matchId: index, type: "question", content: card.question });
      paired.push({ id: `a-${index}`, matchId: index, type: "answer", content: card.answer });
    });

    const shuffled = paired.sort(() => Math.random() - 0.5);
    setTiles(shuffled);
    setScore(0);
    setAttempts(0);
    setSelectedTiles([]);
    setGameWon(false);
  }, [selectedClass, selectedBoard, subjectId, chapterId, isRestarting]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(timer);
  }, [startTime]);

  useEffect(() => {
    const allMatched = tiles.length > 0 && tiles.every((tile) => tile.matched);
    if (allMatched) {
      setTimeout(() => setGameWon(true), 300);
    }
  }, [tiles]);

  const handleClick = (tile) => {
    if (tile.matched || tile.selected || selectedTiles.length === 2) return;

    const updated = tiles.map((t) =>
      t.id === tile.id ? { ...t, selected: true } : t
    );
    setTiles(updated);

    if (selectedTiles.length === 0) {
      setSelectedTiles([tile]);
    } else {
      const first = selectedTiles[0];
      setAttempts((prev) => prev + 1);

      if (first.matchId === tile.matchId && first.type !== tile.type) {
        const matched = updated.map((t) =>
          t.matchId === tile.matchId ? { ...t, matched: true, selected: false } : t
        );
        setTiles(matched);
        setScore((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setTiles((prev) =>
            prev.map((t) => ({ ...t, selected: false }))
          );
        }, 700);
      }

      setSelectedTiles([]);
    }
  };

  const restartGame = () => {
    setIsRestarting(true);
    setTimeout(() => setIsRestarting(false), 500);
  };

  return (
    <div
      className={`min-h-screen bg-[#0B1120] text-white px-4 py-6 flex flex-col transition-opacity duration-500 ${isRestarting ? "opacity-0" : "opacity-100"
        }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link
          to={`/flashcards/${selectedClass}/${selectedBoard}/${subjectId}/${chapterId}`}
          className="text-sm text-white hover:underline flex items-center gap-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Chapter
        </Link>

        <button
          onClick={restartGame}
          className="text-sm text-white hover:underline flex items-center gap-1"
        >
          <RotateCcw className="w-4 h-4" />
          Restart Game
        </button>
      </div>

      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-semibold">
          Match Game - <span className="text-blue-400">{subjectTitle}</span>
        </h1>
        <p className="text-gray-400 mt-1">Match questions with their correct answers</p>
      </div>

      {/* Stats */}
      <div className="flex justify-center gap-6 mb-8">
        <div className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-lg text-sm">
          <Trophy className="w-4 h-4 text-blue-400" /> Score: {score}
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-lg text-sm">
          <Clock className="w-4 h-4 text-blue-400" /> Time: {elapsedTime}s
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border border-slate-600 rounded-lg text-sm">
          <Repeat className="w-4 h-4 text-blue-400" /> Attempts: {attempts}
        </div>
      </div>

      {/* Grid */}
      <div className="flex-grow">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-6xl mx-auto min-h-[60vh]">
          {tiles.map((tile) => (
            <div
              key={tile.id}
              onClick={() => handleClick(tile)}
              className={`h-[160px] w-full max-w-[340px] px-4 py-3 rounded-xl text-white text-center text-base font-medium shadow-lg transition-transform duration-200 ease-in-out
        ${tile.matched
                  ? "bg-green-600/40 text-green-300 border border-green-300/30 cursor-default"
                  : tile.selected
                    ? "bg-blue-500/10 text-blue-200 border border-blue-300/40"
                    : "bg-[#1E2A48] border border-[#1c2c44] hover:border-blue-400/40 shadow-2xl shadow-black/30"
                } cursor-pointer flex items-center justify-center`}
            >
              {tile.content}
            </div>
          ))}
        </div>

      </div>


      {/* Confetti */}
      {gameWon && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={300}
          recycle={false}
        />
      )}
    </div>
  );
}
