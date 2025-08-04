import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import confetti from "canvas-confetti";
import { Button } from "./components/ui/button";
import { Trophy, RotateCcw, Home, Star } from "lucide-react";

const Congratulations = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const score = searchParams.get("score") || "0";
    const time = searchParams.get("time") || "0";
    const attempts = searchParams.get("attempts") || "0";
    const subjectId = searchParams.get("subject") || "";
    const chapterId = searchParams.get("chapter") || "";
    const classId = searchParams.get("class") || "10"; // ✅ Added
    const board = searchParams.get("board") || "ICSE"; // ✅ Added

    useEffect(() => {
        const duration = 3000;
        const end = Date.now() + duration;
        const colors = ["#4F46E5", "#06B6D4", "#10B981", "#F59E0B"];

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors,
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors,
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        })();
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const handlePlayAgain = () => {
        navigate(`/match/${classId}/${board}/${subjectId}/${chapterId}`);
    };

    const handleBackToChapter = () => {
        navigate(`/flashcards/${classId}/${board}/${subjectId}/${chapterId}`);
    };

    const handleHome = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gradient-hero p-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-8 animate-scale-in">
                    <div className="space-y-4">
                        <Trophy className="w-24 h-24 text-primary mx-auto animate-float" />
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                            Congratulations!
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground">
                            You've successfully completed the matching game!
                        </p>
                    </div>

                    {/* Game Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-6">
                        <div className="bg-[#0B1E3B] p-6 rounded-xl shadow-md border border-[#1A2E50] text-center">
                            <Star className="w-8 h-8 text-[#3F8CFF] mx-auto mb-2" />
                            <div className="text-4xl font-bold text-[#3F8CFF]">{score}</div>
                            <p className="text-sm text-[#93A3B1] mt-1">Final Score</p>
                        </div>

                        <div className="bg-[#0B1E3B] p-6 rounded-xl shadow-md border border-[#1A2E50] text-center">
                            <div className="text-3xl font-bold text-[#3F8CFF]">{formatTime(parseInt(time))}</div>
                            <p className="text-sm text-[#93A3B1] mt-1">Time Taken</p>
                        </div>

                        <div className="bg-[#0B1E3B] p-6 rounded-xl shadow-md border border-[#1A2E50] text-center">
                            <div className="text-4xl font-extrabold text-[#3F8CFF]">{attempts}</div>
                            <p className="text-sm text-[#93A3B1] mt-1">Total Attempts</p>
                        </div>
                    </div>

                    {/* Achievement Message */}
                    <div className="max-w-md mx-auto">
                        <div className="bg-success/10 border border-success/20 p-6 rounded-xl">
                            <p className="text-lg leading-relaxed text-success-foreground">
                                Excellent work! You've demonstrated great knowledge and memory skills. Keep practicing to master more topics!
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-center mt-12 space-x-6">
                        {/* Play Again Button */}
                        <Button
                            onClick={handlePlayAgain}
                            size="lg"
                            className="flex items-center gap-2 px-6 py-2 rounded-md bg-blue-500 text-white font-semibold shadow-sm hover:bg-blue-600 transition group"
                        >
                            <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                            Play Again
                        </Button>

                        {/* Back to Chapter Button */}
                        <Button
                            onClick={handleBackToChapter}
                            size="lg"
                            variant="outline"
                            className="flex items-center gap-2 px-6 py-2 rounded-md text-white font-semibold border border-white hover:bg-white hover:text-blue-600 transition"
                        >
                            Back to Chapter
                        </Button>
                    </div>


                    {/* Footer */}
                    <div className="text-sm text-muted-foreground space-y-2">
                        <p>Game completed on {new Date().toLocaleDateString()}</p>
                        <p>Ready for your next challenge? Explore more chapters!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Congratulations;
