import { useState, useEffect, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Progress } from "./components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "./components/ui/alert-dialog";
import { Clock, Send, AlertTriangle } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { testQuestions } from "./data/testData";

const TestStart = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const subjectsParam = searchParams.get("subjects");
  const marksParam = searchParams.get("marks");

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [testStartTime] = useState(Date.now());

  useEffect(() => {
    if (!subjectsParam || !marksParam) {
      navigate("/aitest/subjects");
      return;
    }

    const payload = {
      subjects: subjectsParam.split(","),
      maxMarks: parseInt(marksParam),
    };

    // Filter questions by subjects
    let filteredQuestions = testQuestions.filter(q =>
      payload.subjects.includes(q.subject)
    );

    if (filteredQuestions.length === 0) {
      toast({
        title: "No questions found",
        description: "Selected subjects do not have any questions.",
        variant: "destructive"
      });
      navigate("/aitest/marks");
      return;
    }

    // Hardcode number of questions for 20 marks = 10 questions
    let requiredQuestions = [];
    if (payload.maxMarks === 20) {
      // Shuffle first
      filteredQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5);
      while (requiredQuestions.length < 10) {
        requiredQuestions = requiredQuestions.concat(filteredQuestions);
      }
      requiredQuestions = requiredQuestions.slice(0, 10);
    } else {
      // For other marks, keep as before
      filteredQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5);
      requiredQuestions = filteredQuestions.slice(0, payload.maxMarks);
    }

    setQuestions(requiredQuestions);

    // Timer
    const timeInMinutes = payload.maxMarks === 20 ? 30 : payload.maxMarks === 50 ? 60 : 90;
    setTimeLeft(timeInMinutes * 60);

  }, [subjectsParam, marksParam, navigate, toast]);

  // Timer countdown
  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // Auto-save answers
  useEffect(() => {
    const saveAnswers = () => localStorage.setItem("testAnswers", JSON.stringify(answers));
    const timeoutId = setTimeout(saveAnswers, 1000);
    return () => clearTimeout(timeoutId);
  }, [answers]);

  const handleAnswerChange = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer.trim() }));
  };

  const calculateResult = useCallback(() => {
    let score = 0;
    questions.forEach(q => {
      const userAnswer = answers[q.id]?.toLowerCase().trim() || "";
      const correctAnswer = q.answer?.toLowerCase().trim() || "";
      if (userAnswer === correctAnswer) score += q.marks;
    });

    const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);
    const percentage = totalMarks > 0 ? Math.round((score / totalMarks) * 100) : 0;
    const timeTaken = Math.round((Date.now() - testStartTime) / 1000);
    const subjects = [...new Set(questions.map(q => q.subject))];

    return { score, totalMarks, percentage, subjects, timeTaken, answers };
  }, [questions, answers, testStartTime]);

  const handleSubmitTest = () => {
    const result = calculateResult();
    localStorage.removeItem("testAnswers");

    navigate("/aitest/results", { state: { result, questions } });
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const answeredQuestions = Object.keys(answers).filter(id => answers[parseInt(id)]?.trim()).length;
  const progressPercentage = questions.length > 0 ? (answeredQuestions / questions.length) * 100 : 0;

  if (questions.length === 0 || timeLeft === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Loading test questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10">
        <div className="container mx-auto max-w-6xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold">Test in Progress</h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{answeredQuestions}/{questions.length} answered</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${timeLeft < 300 ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"}`}>
                <Clock className="w-4 h-4" />
                <span className="font-mono text-lg">{formatTime(timeLeft)}</span>
              </div>
              <Button onClick={() => setShowSubmitDialog(true)} className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Submit Test
              </Button>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl p-4">
        <div className="grid gap-6">
          {questions.map((q, idx) => (
            <Card key={`${q.id}-${idx}`} className="relative">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">Question {idx + 1}</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {q.marks} mark{q.marks > 1 ? "s" : ""}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">{q.question}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">Answer:</span>
                    <Input
                      value={answers[q.id] || ""}
                      onChange={e => handleAnswerChange(q.id, e.target.value)}
                      placeholder="Type your answer here..."
                      className="flex-1 text-lg"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Subject: {q.subject.charAt(0).toUpperCase() + q.subject.slice(1)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Submit Test?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to submit your test? You have answered {answeredQuestions} out of {questions.length} questions.
              {answeredQuestions < questions.length && (
                <span className="block mt-2 text-orange-600">
                  Warning: Unanswered questions will be marked incorrect.
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Continue Test</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmitTest}>Submit Test</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default TestStart;
