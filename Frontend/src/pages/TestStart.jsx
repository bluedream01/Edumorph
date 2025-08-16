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

const TOTAL_QUESTIONS = 10;
const MARKS_PER_QUESTION = 2;
const TOTAL_MARKS = TOTAL_QUESTIONS * MARKS_PER_QUESTION;

const TestStart = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const subjectsParam = searchParams.get("subjects");

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [testStartTime] = useState(Date.now());

  // Load Questions ONCE
  useEffect(() => {
    if (!subjectsParam) {
      navigate("/aitest/subjects");
      return;
    }

    const payload = { subjects: subjectsParam.split(",") };
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

    // Shuffle
    filteredQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5);

    // Ensure enough questions
    while (filteredQuestions.length < TOTAL_QUESTIONS) {
      filteredQuestions = filteredQuestions.concat(filteredQuestions);
    }

    // Stable IDs
    const selectedQuestions = filteredQuestions
      .slice(0, TOTAL_QUESTIONS)
      .map((q, index) => ({
        ...q,
        marks: MARKS_PER_QUESTION,
        uid: `${q.subject}_${index}` // ✅ stable ID
      }));

    setQuestions(selectedQuestions);
    setTimeLeft(30 * 60); // 30 mins
  }, [subjectsParam, navigate, toast]);

  // Timer
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

  // Save answers
  useEffect(() => {
    localStorage.setItem("testAnswers", JSON.stringify(answers));
  }, [answers]);

  const handleAnswerChange = (uid, answer) => {
    setAnswers(prev => ({
      ...prev,
      [uid]: answer
    }));
  };

  // ✅ Normalization function for comparison
  const normalize = str =>
    str ? str.trim().toLowerCase().replace(/\s+/g, " ") : "";

  const calculateResult = useCallback(() => {
    let score = 0;
    questions.forEach(q => {
      const userAnswer = normalize(answers[q.uid]);
      const correctAnswer = normalize(q.answer);
      if (userAnswer === correctAnswer) {
        score += q.marks; // ✅ Adds 2 per correct
      }
    });

    const percentage = Math.round((score / TOTAL_MARKS) * 100);
    const timeTaken = Math.round((Date.now() - testStartTime) / 1000);
    const subjects = [...new Set(questions.map(q => q.subject))];

    return { score, totalMarks: TOTAL_MARKS, percentage, subjects, timeTaken, answers };
  }, [questions, answers, testStartTime]);

  const handleSubmitTest = () => {
    const result = calculateResult();
    localStorage.removeItem("testAnswers");
    navigate("/aitest/results", { state: { result, questions } });
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const answeredQuestions = Object.keys(answers).filter(id => answers[id]?.trim()).length;
  const progressPercentage =
    questions.length > 0
      ? (answeredQuestions / questions.length) * 100
      : 0;

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
      {/* HEADER */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10">
        <div className="container mx-auto max-w-6xl px-6 py-4 grid grid-cols-3 items-center">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-foreground">
              Test in Progress
            </h1>
            <span className="text-sm text-muted-foreground">
              {answeredQuestions}/{questions.length} answered
            </span>
          </div>

          <div className="flex justify-center">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xl font-semibold shadow-sm ${
                timeLeft < 300
                  ? "bg-destructive/10 text-destructive"
                  : "bg-primary/10 text-primary"
              }`}
            >
              <Clock className="w-5 h-5" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={() => setShowSubmitDialog(true)}
              className="flex items-center gap-2 font-medium"
            >
              <Send className="w-4 h-4" />
              Submit Test
            </Button>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl px-6 pb-2">
          <Progress value={progressPercentage} className="h-2" />
        </div>
      </div>

      {/* QUESTIONS */}
      <div className="container mx-auto max-w-6xl p-4">
        <div className="grid gap-6">
          {questions.map((q, idx) => (
            <Card key={q.uid} className="relative">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">Question {idx + 1}</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {q.marks} marks
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">{q.question}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">Answer:</span>
                    <Input
                      value={answers[q.uid] || ""}
                      onChange={e => handleAnswerChange(q.uid, e.target.value)}
                      placeholder="Type your answer here..."
                      className="flex-1 text-lg"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Subject:{" "}
                    {q.subject.charAt(0).toUpperCase() + q.subject.slice(1)}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* SUBMIT CONFIRMATION */}
      <AlertDialog open={showSubmitDialog} onOpenChange={setShowSubmitDialog}>
        <AlertDialogContent className="bg-[#1a1a1a] border border-gray-700 text-white max-w-md rounded-xl p-6">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-3 text-lg font-semibold">
              <AlertTriangle className="w-6 h-6 text-blue-400" />
              Submit Test?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300 mt-2">
              Are you sure you want to submit your test? You have answered{" "}
              <span className="font-medium text-white">
                {answeredQuestions}
              </span>{" "}
              out of{" "}
              <span className="font-medium text-white">
                {questions.length}
              </span>{" "}
              questions.
            </AlertDialogDescription>
          </AlertDialogHeader>

          {answeredQuestions < questions.length && (
            <div className="bg-blue-500/10 border border-blue-500 text-blue-400 text-sm px-3 py-2 rounded mt-4">
              Warning: Unanswered questions will be marked incorrect.
            </div>
          )}

          <AlertDialogFooter className="mt-6 flex justify-end gap-3">
            <AlertDialogCancel className="px-4 py-2 rounded-lg border border-gray-500 hover:bg-gray-700 transition">
              Continue Test
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleSubmitTest}
              className="px-4 py-2 rounded-lg bg-blue-500 text-black hover:bg-blue-400 transition"
            >
              Submit Test
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default TestStart;
