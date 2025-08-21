import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { ArrowLeft, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const TestAnswers = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { result, questions } = location.state || {};

  useEffect(() => {
    if (!result || !questions) {
      navigate("/aitest/subjects");
    }
  }, [result, questions, navigate]);

  if (!result || !questions) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">No test data found. Redirecting...</p>
      </div>
    );
  }

  const getAnswerStatus = (question) => {
    const userAnswer = result?.userAnswers?.[question.id];
    const isCorrect = userAnswer === question.answer;
    const isAnswered = userAnswer !== undefined && userAnswer !== "";
    
    if (!isAnswered) return { status: "unanswered", icon: AlertCircle, color: "text-orange-500" };
    if (isCorrect) return { status: "correct", icon: CheckCircle, color: "text-green-500" };
    return { status: "incorrect", icon: XCircle, color: "text-red-500" };
  };

  return (
    <div className="min-h-screen bg-[#0a1128] p-6 text-white">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-xl border-white text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Results
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">Test Answers Review</h1>
            <p className="text-gray-400">
              Your Score: {result.score}/{result.totalMarks} ({result.percentage}%)
            </p>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {[
            {
              label: "Correct",
              value: questions.filter(q => result?.userAnswers?.[q.id] === q.answer).length,
              color: "text-green-400",
              bg: "bg-green-900/30"
            },
            {
              label: "Incorrect",
              value: questions.filter(q => {
                const ua = result?.userAnswers?.[q.id];
                return ua !== undefined && ua !== "" && ua !== q.answer;
              }).length,
              color: "text-red-400",
              bg: "bg-red-900/30"
            },
            {
              label: "Unanswered",
              value: questions.filter(q => {
                const ua = result?.userAnswers?.[q.id];
                return ua === undefined || ua === "";
              }).length,
              color: "text-orange-400",
              bg: "bg-orange-900/30"
            }
          ].map((stat, i) => (
            <Card
              key={i}
              className={`rounded-2xl border-0 shadow-lg ${stat.bg} hover:scale-105 transition-transform`}
            >
              <CardContent className="p-6 text-center">
                <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Questions and Answers */}
        <div className="space-y-6">
          {questions.map((question, index) => {
            const answerStatus = getAnswerStatus(question);
            const userAnswer = result?.userAnswers?.[question.id];
            const StatusIcon = answerStatus.icon;

            return (
              <Card
                key={question.id}
                className="rounded-2xl bg-[#111c33] border-0 shadow-lg hover:scale-[1.01] transition-transform"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg font-medium flex-1">
                      <span className="text-gray-400 mr-2">Q{index + 1}.</span>
                      {question.question}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <StatusIcon className={`w-5 h-5 ${answerStatus.color}`} />
                      <Badge variant="outline" className="text-xs border-[#66b3ff] text-[#66b3ff]">
                        {question.subject}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {question.marks} mark{question.marks > 1 ? "s" : ""}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* User's Answer */}
                  <div>
                    <div className="text-sm font-medium mb-2 flex items-center gap-2">
                      Your Answer:
                      <StatusIcon className={`w-4 h-4 ${answerStatus.color}`} />
                    </div>
                    <div
                      className={`p-3 rounded-xl border text-sm ${
                        answerStatus.status === "correct"
                          ? "bg-green-900/30 border-green-700"
                          : answerStatus.status === "incorrect"
                          ? "bg-red-900/30 border-red-700"
                          : "bg-orange-900/30 border-orange-700"
                      }`}
                    >
                      {userAnswer || "No answer provided"}
                    </div>
                  </div>

                  {/* Correct Answer */}
                  <div>
                    <div className="text-sm font-medium mb-2 text-green-400">
                      Correct Answer:
                    </div>
                    <div className="p-3 rounded-xl bg-green-900/30 border border-green-700 text-sm">
                      {question.answer}
                    </div>
                  </div>

                  {/* Explanation if available */}
                  {question.explanation && (
                    <div>
                      <div className="text-sm font-medium mb-2 text-blue-400">
                        Explanation:
                      </div>
                      <div className="p-3 rounded-xl bg-blue-900/30 border border-blue-700 text-sm text-gray-200">
                        {question.explanation}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="mt-12 flex justify-center gap-4">
          <Button 
            onClick={() => navigate("/aitest/subjects")}
            variant="outline"
            className="rounded-xl border-[#66b3ff] text-[#66b3ff] hover:bg-[#132347]"
          >
            Take Another Test
          </Button>
          <Button 
            onClick={() => navigate("/ai-study-plan")}
            className="rounded-xl bg-[#66b3ff] text-[#0a1128] hover:bg-[#99ccff]"
          >
            View Study Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestAnswers;
