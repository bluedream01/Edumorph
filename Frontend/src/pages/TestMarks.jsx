import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { RadioGroup } from "./components/ui/radio-group";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  Target,
  BookOpen,
} from "lucide-react";
import { testSubjects } from "./data/testData";

// React Icons
import { PiMathOperationsBold } from "react-icons/pi";
import { GiMaterialsScience } from "react-icons/gi";
import { FaFlask, FaDna, FaHistory, FaGlobeAsia } from "react-icons/fa";

// 🔹 Subject Icon Map (same as TestSubjects)
const iconMap = {
  Mathematics: {
    icon: <PiMathOperationsBold className="w-5 h-5" />,
    color: "from-blue-500 to-cyan-400",
  },
  Physics: {
    icon: <GiMaterialsScience className="w-5 h-5" />,
    color: "from-purple-500 to-indigo-400",
  },
  Chemistry: {
    icon: <FaFlask className="w-5 h-5" />,
    color: "from-pink-500 to-red-400",
  },
  Biology: {
    icon: <FaDna className="w-5 h-5" />,
    color: "from-purple-500 to-pink-400",
  },
  History: {
    icon: <FaHistory className="w-5 h-5" />,
    color: "from-yellow-500 to-orange-400",
  },
  Geography: {
    icon: <FaGlobeAsia className="w-5 h-5" />,
    color: "from-teal-500 to-green-400",
  },
};

const TestMarks = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedMarks, setSelectedMarks] = useState("");

  const subjectsParam = searchParams.get("subjects");
  const chaptersParam = searchParams.get("chapters");
  const selectedSubjectIds = subjectsParam?.split(",") || [];
  const selectedSubjects = testSubjects.filter((s) =>
    selectedSubjectIds.includes(s.id)
  );

  useEffect(() => {
    if (!subjectsParam || !chaptersParam || selectedSubjectIds.length === 0) {
      navigate("/aitest/subjects");
    }
  }, [subjectsParam, chaptersParam, selectedSubjectIds.length, navigate]);

  const marksOptions = [
    { marks: "20", time: "30", description: "Quick Assessment", questions: "20 questions" },
    { marks: "50", time: "60", description: "Standard Test", questions: "50 questions" },
    { marks: "80", time: "90", description: "Comprehensive Exam", questions: "80 questions" },
  ];

  const handleStartTest = () => {
    if (!selectedMarks) return;
    const params = new URLSearchParams({
      subjects: subjectsParam,
      chapters: chaptersParam,
      marks: selectedMarks,
    });
    navigate(`/aitest/start?${params.toString()}`);
  };

  if (selectedSubjects.length === 0) return null;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-center mb-10">
          <h1 className="text-3xl font-bold text-white text-center">
            Select Test Configuration
          </h1>
        </div>

        {/* Selected Subjects */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Selected Subjects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {selectedSubjects.map((subject) => {
                const subjectIconData = iconMap[subject.name] || {
                  icon: <BookOpen className="w-4 h-4" />,
                  color: "from-gray-500 to-gray-300",
                };
                return (
                  <div
                    key={subject.id}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-white bg-gradient-to-r ${subjectIconData.color}`}
                  >
                    {subjectIconData.icon}
                    <span>{subject.name}</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Marks Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Choose Test Duration & Marks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedMarks} onValueChange={setSelectedMarks}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {marksOptions.map((option) => (
                  <label
                    key={option.marks}
                    htmlFor={`marks-${option.marks}`}
                    className={`relative flex flex-col items-center justify-center p-6 rounded-lg cursor-pointer transition-all duration-300
                      ${
                        selectedMarks === option.marks
                          ? "border-2 border-blue-500 bg-blue-500/10 shadow-lg"
                          : "border border-[#1f2e4d] hover:shadow-md"
                      }`}
                  >
                    <input
                      type="radio"
                      id={`marks-${option.marks}`}
                      value={option.marks}
                      checked={selectedMarks === option.marks}
                      onChange={() => setSelectedMarks(option.marks)}
                      className="hidden"
                    />
                    <div className="text-3xl font-semibold text-blue-500 mb-2">
                      {option.marks}
                    </div>
                    <div className="text-base font-semibold text-white mb-1">
                      {option.description}
                    </div>
                    <div className="text-sm text-gray-400 mb-2">
                      {option.questions}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-blue-400">
                      <Clock className="w-4 h-4" />
                      {option.time} minutes
                    </div>
                  </label>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Test Guidelines */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-3">Test Guidelines</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Fill in the blanks with appropriate answers</li>
              <li>• All questions are mandatory and carry equal marks</li>
              <li>• Timer will start immediately when you begin the test</li>
              <li>• Your answers will be auto-saved as you type</li>
              <li>• Submit the test before time runs out</li>
            </ul>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
          <Button
            onClick={() => navigate("/aitest/subjects?" + searchParams.toString())}
            className="flex items-center justify-center gap-2 min-w-[180px] px-6 py-3 text-lg font-normal rounded-lg bg-gradient-to-r from-blue-400 to-blue-300 text-black hover:from-blue-600 hover:to-blue-500 transition-all"
            size="lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>

          <Button
            onClick={handleStartTest}
            disabled={!selectedMarks}
            className="flex items-center justify-center gap-2 min-w-[180px] px-6 py-3 text-lg font-normal rounded-lg bg-gradient-to-r from-blue-400 to-blue-300 text-black hover:from-blue-600 hover:to-blue-500 transition-all"
            size="lg"
          >
            Start Test
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestMarks;
