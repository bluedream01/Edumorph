import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Progress } from "./components/ui/progress";
import { Badge } from "./components/ui/badge";
import { Home, RotateCcw, BookOpen, Trophy, Clock, Target } from "lucide-react";
import { getResultComment } from "./data/testData";
import confetti from "canvas-confetti";

const TestResults = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { result, questions } = location.state || {};

  useEffect(() => {
    if (!result || !questions) {
      navigate('/aitest/results');
      return;
    }

    // Trigger confetti for good performance
    if (result.percentage >= 70) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
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

  const getPerformanceColor = (percentage) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-orange-600";
    return "text-red-600";
  };

  const getPerformanceBadge = (percentage) => {
    if (percentage >= 80) return { text: "Excellent", variant: "default" };
    if (percentage >= 60) return { text: "Good", variant: "secondary" };
    if (percentage >= 40) return { text: "Average", variant: "outline" };
    return { text: "Needs Improvement", variant: "destructive" };
  };

  const performanceBadge = getPerformanceBadge(result.percentage);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
              <Trophy className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2">Test Completed!</h1>
          <p className="text-lg text-muted-foreground">Here are your results</p>
        </div>

        {/* Main Results Card */}
        <Card className="mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">
              <span className={getPerformanceColor(result.percentage)}>
                {result.score}/{result.totalMarks}
              </span>
            </CardTitle>
            <div className="space-y-4">
              <div className="relative">
                <Progress value={result.percentage} className="h-4" />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                  {result.percentage}%
                </span>
              </div>
              <Badge variant={performanceBadge.variant} className="text-lg px-4 py-2">
                {performanceBadge.text}
              </Badge>
            </div>
          </CardHeader>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold">{result.percentage}%</div>
              <div className="text-sm text-muted-foreground">Accuracy</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold">{formatTime(result.timeTaken)}</div>
              <div className="text-sm text-muted-foreground">Time Taken</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-primary" />
              <div className="text-2xl font-bold">{result.subjects.length}</div>
              <div className="text-sm text-muted-foreground">Subjects</div>
            </CardContent>
          </Card>
        </div>

        {/* Comment */}
        <Card className="mb-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Performance Review</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {getResultComment(result.percentage)}
            </p>
          </CardContent>
        </Card>

        {/* Subjects Breakdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Test Subjects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {result.subjects.map(subject => (
                <Badge key={subject} variant="outline" className="text-sm">
                  {subject.charAt(0).toUpperCase() + subject.slice(1)}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button 
            onClick={() => navigate('/test/study-plan', { state: { result } })}
            className="flex items-center gap-2 p-6 h-auto flex-col"
            variant="default"
          >
            <BookOpen className="w-6 h-6" />
            <span>View Study Plan</span>
          </Button>

          <Button 
            onClick={() => navigate('/test/subjects')}
            variant="outline"
            className="flex items-center gap-2 p-6 h-auto flex-col"
          >
            <RotateCcw className="w-6 h-6" />
            <span>Take Another Test</span>
          </Button>

          <Button 
            onClick={() => navigate('/')}
            variant="outline"
            className="flex items-center gap-2 p-6 h-auto flex-col"
          >
            <Home className="w-6 h-6" />
            <span>Back to Home</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestResults;
