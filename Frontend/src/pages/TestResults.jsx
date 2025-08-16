import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { RotateCcw, BookOpen, Trophy, Clock, Target, Book } from "lucide-react";
import { getResultComment } from "./data/testData";
import confetti from "canvas-confetti";

const TestResults = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { result, questions } = location.state || {};

  useEffect(() => {
    if (!result || !questions) {
      navigate("/aitest/results");
      return;
    }

    if (result.percentage >= 70) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [result, questions, navigate]);

  if (!result || !questions) {
    return null;
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const getPerformanceColor = () => {
    return "text-[#66b3ff]";
  };

  const getPerformanceBadge = (percentage) => {
    if (percentage >= 80)
      return {
        text: "Excellent",
        className: "bg-green-400 text-[#0a1425]",
      };
    if (percentage >= 60)
      return {
        text: "Good",
        className: "bg-yellow-400 text-[#0a1425]",
      };
    if (percentage >= 40)
      return {
        text: "Average",
        className: "bg-orange-400 text-white",
      };
    return {
      text: "Needs Improvement",
      className: "bg-red-500 text-white",
    };
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-yellow-400";
    if (percentage >= 40) return "bg-orange-400";
    return "bg-red-500";
  };

  const performanceBadge = getPerformanceBadge(result.percentage);

  return (
    <div className="min-h-screen bg-[#0a1425] p-4 text-white">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-[#4da6ff] flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-extrabold mb-2">Test Completed!</h1>
          <p className="text-gray-400">Here are your results</p>
        </div>

        {/* Main Results Card */}
        <Card className="mb-8 bg-[#111c33] border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">
              <span className={getPerformanceColor()}>
                {result.score}/{result.totalMarks}
              </span>
            </CardTitle>
            <div className="space-y-4">
              {/* Custom Animated Progress Bar */}
              <div className="relative w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className={`${getProgressColor(
                    result.percentage
                  )} h-full transition-all duration-700 ease-in-out`}
                  style={{ width: `${result.percentage}%` }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                  {result.percentage}%
                </span>
              </div>

              <div
                className={`text-lg px-4 py-2 rounded-full font-semibold inline-block ${performanceBadge.className}`}
              >
                {performanceBadge.text}
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-[#111c33] border-0 text-center">
            <CardContent className="p-6">
              <Target className="w-8 h-8 mx-auto mb-3 text-[#66b3ff]" />
              <div className="text-2xl font-bold">{result.percentage}%</div>
              <div className="text-sm text-gray-400">Accuracy</div>
            </CardContent>
          </Card>

          <Card className="bg-[#111c33] border-0 text-center">
            <CardContent className="p-6">
              <Clock className="w-8 h-8 mx-auto mb-3 text-[#66b3ff]" />
              <div className="text-2xl font-bold">
                {formatTime(result.timeTaken)}
              </div>
              <div className="text-sm text-gray-400">Time Taken</div>
            </CardContent>
          </Card>

          <Card className="bg-[#111c33] border-0 text-center">
            <CardContent className="p-6">
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-[#66b3ff]" />
              <div className="text-2xl font-bold">
                {result.subjects.length}
              </div>
              <div className="text-sm text-gray-400">Subjects</div>
            </CardContent>
          </Card>
        </div>

        {/* Comment */}
        <Card className="mb-8 bg-[#111c33] border-0">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Performance Review</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              {getResultComment(result.percentage)}
            </p>
          </CardContent>
        </Card>

        {/* Subjects Breakdown */}
        <Card className="mb-8 bg-[#111c33] border-0">
          <CardHeader>
            <CardTitle>Test Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {result.subjects.map((subject) => (
                <Badge
                  key={subject}
                  variant="outline"
                  className="text-sm border-[#66b3ff] text-[#66b3ff]"
                >
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* View Answers */}
          <Button
            onClick={() =>
              navigate("/test/view-answers", { state: { result, questions } })
            }
            className="flex items-center gap-2 p-6 h-auto flex-col bg-blue-500 text-white border border-blue-500 hover:scale-105 transition-transform duration-300"
          >
            <Book className="w-6 h-6" />
            <span>View Answers</span>
          </Button>

          {/* Study Plan */}
          <Button
            onClick={() => navigate("/test/study-plan", { state: { result } })}
            className="flex items-center gap-2 p-6 h-auto flex-col border border-white text-white hover:scale-105 transition-transform duration-300"
          >
            <Target className="w-6 h-6" />
            <span>Study Plan</span>
          </Button>

          {/* Take Another Test */}
          <Button
            onClick={() => navigate("/aitest/start")}
            className="flex items-center gap-2 p-6 h-auto flex-col border border-white text-white hover:scale-105 transition-transform duration-300"
          >
            <RotateCcw className="w-6 h-6" />
            <span>Take Another Test</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
