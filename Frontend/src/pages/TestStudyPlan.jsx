import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Progress } from "./components/ui/progress";
import { Badge } from "./components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Checkbox } from "./components/ui/checkbox";
import { Calendar } from "./components/ui/calendar";
import {
  ArrowLeft, Target, BookOpen, Clock, TrendingUp, TrendingDown,
  AlertTriangle, CheckCircle, Star, Flame, Trophy, Brain,
  Calendar as CalendarIcon, Timer, Play, Pause, RotateCcw,
  ChevronDown, ChevronRight, Eye, Video, FileText, Map,
  Award, BarChart3, Users, MessageSquare, PenTool, Lightbulb
} from "lucide-react";
import { testSubjects, testQuestions, getTestQuestions, getStudyPlan, getResultComment } from "./data/testData";

const TestStudyPlan = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { result } = location.state || {};


  const [calendarView, setCalendarView] = useState("weekly");

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [completedTasks, setCompletedTasks] = useState({});
  const [expandedTasks, setExpandedTasks] = useState({});
  const [streak, setStreak] = useState(4);


  useEffect(() => {
    if (!result) {
      navigate('/aitest/subjects');
    }
  }, [result, navigate]);

  if (!result) return null;

  // Mock data based on test results
  const topicPerformance = [
    { topic: "Algebra", score: 65, total: 100, percentage: 65, status: "weak" },
    { topic: "Geometry", score: 80, total: 100, percentage: 80, status: "strong" },
    { topic: "Calculus", score: 45, total: 100, percentage: 45, status: "critical" },
    { topic: "Statistics", score: 90, total: 100, percentage: 90, status: "excellent" }
  ];

  const questionTypePerformance = [
    { type: "Long Answer", correct: 3, total: 8, percentage: 37.5 },
    { type: "Definitions", correct: 7, total: 10, percentage: 70 },
    { type: "Problem Solving", correct: 4, total: 6, percentage: 66.7 }
  ];

  const priorityTopics = [
    {
      priority: "High",
      topic: "Calculus - Differentiation",
      reason: "3/5 marks lost due to incorrect application of chain rule",
      estimatedTime: "5-7 days",
      color: "text-red-600"
    },
    {
      priority: "High",
      topic: "Algebra - Quadratic Equations",
      reason: "2/4 marks lost due to calculation errors",
      estimatedTime: "4-5 days",
      color: "text-red-600"
    },
    {
      priority: "Medium",
      topic: "Statistics - Probability",
      reason: "Missing conceptual understanding in conditional probability",
      estimatedTime: "3-4 days",
      color: "text-orange-600"
    },
    {
      priority: "Low",
      topic: "Geometry - Coordinate Geometry",
      reason: "Minor improvements needed in formula application",
      estimatedTime: "2-3 days",
      color: "text-green-600"
    }
  ];

  const dailyTasks = [
    {
      id: "task-1",
      subject: "Mathematics",
      topic: "Calculus - Chain Rule",
      estimatedTime: "45 min",
      difficulty: "hard",
      date: "2024-01-15",
      keyPoints: ["Understand composite functions", "Practice derivative rules", "Apply to complex expressions"],
      resources: {
        notes: "Chapter 12 - Differentiation Rules",
        videos: "Khan Academy - Chain Rule Mastery",
        quizzes: "Practice Set A: 15 problems"
      },
      confidence: 85
    },
    {
      id: "task-2",
      subject: "Mathematics",
      topic: "Algebra - Quadratic Formula",
      estimatedTime: "30 min",
      difficulty: "medium",
      date: "2024-01-15",
      keyPoints: ["Review discriminant", "Practice word problems", "Check calculation accuracy"],
      resources: {
        notes: "Chapter 8 - Quadratic Equations",
        videos: "Professor Smith - Quadratic Applications",
        quizzes: "Daily Quiz: 10 problems"
      },
      confidence: 72
    }
  ];

  const achievements = [
    { name: "First Week Complete", earned: true, icon: Trophy },
    { name: "Mathematics Mastery", earned: false, icon: Brain },
    { name: "Consistent Learner", earned: true, icon: Flame },
    { name: "Problem Solver", earned: false, icon: Target }
  ];

  const toggleTaskCompletion = (taskId) => {
    setCompletedTasks(prev => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const toggleTaskExpansion = (taskId) => {
    setExpandedTasks(prev => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const getPerformanceColor = (percentage) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-orange-600";
    return "text-red-600";
  };

  const getDifficultyBadge = (difficulty) => {
    const variants = {
      easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      medium: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
    };

    return variants[difficulty] || variants.medium;
  };


  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Results
          </Button>
          <div>
            <h1 className="text-3xl font-bold">AI Performance Feedback & Study Plan</h1>
            <p className="text-muted-foreground">Personalized recommendations based on your test performance</p>
          </div>
        </div>

        <Tabs defaultValue="feedback" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-[#1e2941] rounded-lg p-1">
            <TabsTrigger
              value="feedback"
              className="data-[state=active]:bg-[#0f172a] data-[state=active]:text-white text-slate-300 rounded-md px-3 py-2 font-medium"
            >
              Performance Analysis
            </TabsTrigger>
            <TabsTrigger
              value="priorities"
              className="data-[state=active]:bg-[#0f172a] data-[state=active]:text-white text-slate-300 rounded-md px-3 py-2 font-medium"
            >
              Priority Topics
            </TabsTrigger>
            <TabsTrigger
              value="schedule"
              className="data-[state=active]:bg-[#0f172a] data-[state=active]:text-white text-slate-300 rounded-md px-3 py-2 font-medium"
            >
              Study Schedule
            </TabsTrigger>
            <TabsTrigger
              value="progress"
              className="data-[state=active]:bg-[#0f172a] data-[state=active]:text-white text-slate-300 rounded-md px-3 py-2 font-medium"
            >
              Progress Tracking
            </TabsTrigger>
          </TabsList>


          {/* Performance Analysis Tab */}
          <TabsContent value="feedback" className="space-y-6">
            {/* Overall Results */}
            <Card className="bg-[#1e2941] text-white rounded-2xl shadow-lg border border-blue-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Overall Performance Summary
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Score, Strength, Weakness */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Overall Score */}
                  <div className="text-center p-4 rounded-lg border border-blue-900 bg-[#1e2941]">
                    <div
                      className={`text-3xl font-bold ${getPerformanceColor(
                        result.percentage
                      )}`}
                    >
                      {result.percentage}%
                    </div>
                    <div className="text-sm text-slate-300">Overall Score</div>
                    <div className="text-xs text-slate-400">
                      {result.score}/{result.totalMarks} marks
                    </div>
                  </div>

                  {/* Strength */}
                  <div className="text-center p-4 rounded-lg border border-blue-900 bg-[#1e2941]">
                    <div className="text-2xl font-bold text-green-400">
                      Structured Writing
                    </div>
                    <div className="text-sm text-slate-300">Top Strength</div>
                  </div>

                  {/* Weakness */}
                  <div className="text-center p-4 rounded-lg border border-blue-900 bg-[#1e2941]">
                    <div className="text-2xl font-bold text-red-400">
                      Conceptual Clarity
                    </div>
                    <div className="text-sm text-slate-300">Needs Focus</div>
                  </div>
                </div>

                {/* AI Insight */}
                <div className="p-4 bg-[#1e2941] rounded-lg border-l-4 border-blue-500">
                  <p className="text-sm text-slate-200">
                    <strong>AI Insight:</strong> You scored {result.percentage}% overall.
                    <span className="text-green-400"> Strength:</span> Writing structured
                    answers with clear explanations.
                    <span className="text-red-400"> Weakness:</span> Missing key
                    conceptual points, especially in problem-solving steps.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Topic-wise Performance */}
            <Card className="bg-[#1e2941] text-white rounded-2xl shadow-lg border border-blue-900">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Topic-wise Performance Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topicPerformance.map((topic, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        {/* Topic name */}
                        <span className="text-sm font-medium">{topic.topic}</span>

                        {/* Percentage + status badge */}
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm font-semibold ${topic.percentage < 50
                                ? "text-red-400"
                                : topic.percentage < 75
                                  ? "text-yellow-400"
                                  : "text-green-400"
                              }`}
                          >
                            {topic.percentage}%
                          </span>

                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${topic.status === "excellent"
                                ? "bg-blue-500/20 text-blue-400"
                                : topic.status === "strong"
                                  ? "bg-green-500/20 text-green-400"
                                  : topic.status === "weak"
                                    ? "bg-yellow-500/20 text-yellow-400"
                                    : "bg-red-500/20 text-red-400"
                              }`}
                          >
                            {topic.status}
                          </span>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full bg-slate-800 rounded-full h-2 border border-blue-900">
                        <div
                          className={`h-2 rounded-full ${topic.percentage < 50
                              ? "bg-red-500"
                              : topic.percentage < 75
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }`}
                          style={{ width: `${topic.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Question Type Performance */}
            <Card className="bg-[#1e2941] text-white rounded-2xl shadow-lg border border-blue-900">
              <CardHeader>
                <CardTitle>Question Type Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {questionTypePerformance.map((type, index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-[#1e2941] border border-blue-900 rounded-lg"
                    >
                      <div className="text-lg font-semibold">{type.type}</div>
                      <div
                        className={`text-2xl font-bold ${getPerformanceColor(
                          type.percentage
                        )}`}
                      >
                        {type.percentage.toFixed(1)}%
                      </div>
                      <div className="text-sm text-slate-300">
                        {type.correct}/{type.total} correct
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Common Mistakes */}
            <Card className="bg-[#1e2941] text-white rounded-2xl shadow-lg border border-blue-900">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-400" />
                  Common Mistakes Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#1e2941] border border-blue-900 rounded-lg">
                    <h4 className="font-semibold text-red-400 mb-2">
                      Conceptual Errors (60%)
                    </h4>
                    <ul className="text-sm space-y-1 text-slate-300">
                      <li>• Incomplete understanding of chain rule applications</li>
                      <li>• Missing key steps in problem-solving</li>
                      <li>• Incorrect formula applications</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-[#1e2941] border border-blue-900 rounded-lg">
                    <h4 className="font-semibold text-orange-400 mb-2">
                      Careless Mistakes (40%)
                    </h4>
                    <ul className="text-sm space-y-1 text-slate-300">
                      <li>• Calculation errors in basic arithmetic</li>
                      <li>• Sign errors in algebraic manipulations</li>
                      <li>• Incomplete final answers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>



          {/* Priority Topics Tab */}
          <TabsContent value="priorities" className="space-y-6">
            <Card className="bg-[#1e2941] text-white rounded-2xl shadow-lg border border-[#374151]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  High-Impact Priority Topics
                </CardTitle>
                <p className="text-sm text-slate-300">
                  Focus on these topics to maximize your score improvement
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {priorityTopics.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 border border-blue-900 rounded-lg bg-[#1e2941]"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {/* Priority Badge */}
                          <span
                            className={`px-3 py-1 text-xs font-semibold rounded-full ${item.priority === "High"
                              ? "bg-red-500 text-white"
                              : item.priority === "Medium"
                                ? "bg-yellow-500 text-white"
                                : "bg-green-500 text-white"
                              }`}
                          >
                            {item.priority} Priority
                          </span>

                          <h4 className="font-semibold">{item.topic}</h4>
                        </div>
                        <div className="text-sm text-slate-300">
                          Est. {item.estimatedTime}
                        </div>
                      </div>
                      <p className="text-sm text-slate-300 mb-3">{item.reason}</p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate("/quiz")}
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Practice Quiz
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate("/notes")}
                        >
                          <FileText className="w-4 h-4 mr-1" />
                          Study Notes
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => navigate("/mindmap")}
                        >
                          <Map className="w-4 h-4 mr-1" />
                          Mindmap
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>


          {/* Study Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            {/* Calendar View Toggle */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Study Calendar</CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant={calendarView === "weekly" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCalendarView("weekly")}
                    >
                      Weekly
                    </Button>
                    <Button
                      variant={calendarView === "monthly" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCalendarView("monthly")}
                    >
                      Monthly
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => date && setSelectedDate(date)}
                      className="rounded-md border"
                    />
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Today's Tasks</h4>
                    {dailyTasks.map((task) => (
                      <Card key={task.id} className="border-l-4 border-l-primary">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Checkbox
                                checked={completedTasks[task.id] || false}
                                onCheckedChange={() => toggleTaskCompletion(task.id)}
                              />
                              <div>
                                <h5 className="font-medium">{task.subject} - {task.topic}</h5>
                                <div className="flex items-center gap-2 mt-1">
                                  <Badge className={getDifficultyBadge(task.difficulty)}>
                                    {task.difficulty}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {task.estimatedTime}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => toggleTaskExpansion(task.id)}
                            >
                              {expandedTasks[task.id] ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                            </Button>
                          </div>

                          {expandedTasks[task.id] && (
                            <div className="mt-4 space-y-3 border-t pt-3">
                              <div>
                                <h6 className="font-medium text-sm mb-1">Key Concepts:</h6>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                  {task.keyPoints.map((point, idx) => (
                                    <li key={idx}>• {point}</li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <h6 className="font-medium text-sm mb-2">Study Resources:</h6>
                                <div className="grid grid-cols-1 gap-2">
                                  <Button variant="outline" size="sm" className="justify-start">
                                    <FileText className="w-4 h-4 mr-2" />
                                    {task.resources.notes}
                                  </Button>
                                  <Button variant="outline" size="sm" className="justify-start">
                                    <Video className="w-4 h-4 mr-2" />
                                    {task.resources.videos}
                                  </Button>
                                  <Button variant="outline" size="sm" className="justify-start">
                                    <Brain className="w-4 h-4 mr-2" />
                                    {task.resources.quizzes}
                                  </Button>
                                </div>
                              </div>

                              <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground">AI Confidence Rating:</span>
                                <div className="flex items-center gap-2">
                                  <Progress value={task.confidence} className="w-20 h-2" />
                                  <span className="font-medium">{task.confidence}%</span>
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily/Weekly Schedule Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Daily Schedule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                    <div className="text-sm font-medium">30 min</div>
                    <div className="text-sm">Review yesterday's mistakes</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-950 rounded-lg">
                    <div className="text-sm font-medium">45 min</div>
                    <div className="text-sm">Focus on weakest topic (Calculus)</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <div className="text-sm font-medium">15 min</div>
                    <div className="text-sm">Practice structured answer writing</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Weekly Schedule</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                    <Trophy className="w-4 h-4" />
                    <div className="text-sm">1 full mock test</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <Users className="w-4 h-4" />
                    <div className="text-sm">Peer/teacher feedback session</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <PenTool className="w-4 h-4" />
                    <div className="text-sm">Diagram & definition revision</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  AI Study Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border-l-4 border-yellow-500">
                  <div className="font-medium text-yellow-800 dark:text-yellow-200 mb-1">Focus Alert</div>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    Spend more time on Calculus – you've consistently scored below 50% in this topic
                  </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="study-techniques">
                    <AccordionTrigger>Topic-Specific Study Techniques</AccordionTrigger>
                    <AccordionContent className="space-y-2">
                      <div className="p-3 border rounded">
                        <h5 className="font-medium">For Calculus:</h5>
                        <p className="text-sm text-muted-foreground">Practice step-by-step differentiation, use visual aids for understanding limits</p>
                      </div>
                      <div className="p-3 border rounded">
                        <h5 className="font-medium">For Problem Solving:</h5>
                        <p className="text-sm text-muted-foreground">Write clear problem-solving steps: Given → Find → Solution → Check</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="break-reminders">
                    <AccordionTrigger>Break & Reminder Cycles</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-sm text-muted-foreground">
                        Study for 45 minutes, then take a 15-minute break. After 3 cycles, take a 30-minute break.
                        Review notes every 2 hours to reinforce learning.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tracking Tab */}
          <TabsContent value="progress" className="space-y-6">
            {/* Streak and Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    Study Streak
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">{streak}</div>
                  <p className="text-sm text-muted-foreground">
                    You've studied {streak} days in a row! 🔥
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-500" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className={`p-3 rounded-lg text-center ${achievement.earned ? 'bg-green-50 dark:bg-green-950' : 'bg-gray-50 dark:bg-gray-950'}`}>
                        <achievement.icon className={`w-6 h-6 mx-auto mb-1 ${achievement.earned ? 'text-green-600' : 'text-gray-400'}`} />
                        <div className={`text-xs ${achievement.earned ? 'text-green-700 dark:text-green-300' : 'text-gray-500'}`}>
                          {achievement.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Charts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Progress Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Mastered vs Pending Topics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Mastered Topics</span>
                        <span>2/6 (33%)</span>
                      </div>
                      <Progress value={33} className="h-2" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3">Weekly Progress</h4>
                    <div className="grid grid-cols-7 gap-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                        <div key={day} className="text-center">
                          <div className="text-xs text-muted-foreground mb-1">{day}</div>
                          <div className={`w-8 h-8 rounded-full mx-auto flex items-center justify-center text-xs ${index < 4 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                            'bg-gray-100 text-gray-500 dark:bg-gray-800'
                            }`}>
                            {index < 4 ? '✓' : '–'}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Checkpoints */}
            <Card>
              <CardHeader>
                <CardTitle>Progress Checkpoints</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="font-medium">Week 1 Checkpoint</div>
                    <div className="text-sm text-muted-foreground">Short re-test on Calculus basics</div>
                  </div>
                  <Button size="sm" variant="outline" className="ml-auto">
                    Take Test
                  </Button>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Timer className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="font-medium">Self-Assessment Checklist</div>
                    <div className="text-sm text-muted-foreground">Review understanding of key concepts</div>
                  </div>
                  <Button size="sm" variant="outline" className="ml-auto">
                    Open Checklist
                  </Button>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <MessageSquare className="w-5 h-5 text-purple-500" />
                  <div>
                    <div className="font-medium">Mentor Review (Week 2)</div>
                    <div className="text-sm text-muted-foreground">Schedule feedback session</div>
                  </div>
                  <Button size="sm" variant="outline" className="ml-auto">
                    Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Motivational Note */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 mx-auto mb-3 text-yellow-500" />
                <h3 className="text-lg font-semibold mb-2">You're Making Great Progress!</h3>
                <p className="text-muted-foreground mb-4">
                  Your structured approach to problem-solving is a real strength. With focused practice on calculus concepts,
                  you're well-positioned to improve significantly.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full">
                  <Target className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium">Goal: Achieve 82% in your next test (+10%)</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Bottom Controls */}
        {/* <Card className="mt-8">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Regenerate Plan
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Timer className="w-4 h-4" />
                Edit Time Duration
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Swap Topics
              </Button>
              <Button onClick={() => navigate('/test/subjects')} className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Take Practice Test
              </Button>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default TestStudyPlan;