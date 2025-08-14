import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Label } from "./components/ui/label";
import { ArrowLeft, ArrowRight, Clock, Target } from "lucide-react";
import { testSubjects } from "./data/testData";

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
    {
      marks: "20",
      time: "30",
      description: "Quick Assessment",
      questions: "20 questions",
    },
    {
      marks: "50",
      time: "60",
      description: "Standard Test",
      questions: "50 questions",
    },
    {
      marks: "80",
      time: "90",
      description: "Comprehensive Exam",
      questions: "80 questions",
    },
  ];

  const handleStartTest = () => {
    if (!selectedMarks) return;

    const params = new URLSearchParams({
      subjects: subjectsParam,
      chapters: chaptersParam,
      marks: selectedMarks,
    });

    navigate(`/test/start?${params.toString()}`);
  };

  if (selectedSubjects.length === 0) return null;

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={() =>
              navigate("/test/chapters?" + searchParams.toString())
            }
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Chapters
          </Button>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            Select Test Configuration
          </h1>

          <div></div>
        </div>

        {/* Selected Subjects */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Selected Subjects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedSubjects.map((subject) => (
                <div
                  key={subject.id}
                  className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  <span>{subject.icon}</span>
                  <span>{subject.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Marks Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Choose Test Duration & Marks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedMarks} onValueChange={setSelectedMarks}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {marksOptions.map((option) => (
                  <div key={option.marks} className="relative">
                    <RadioGroupItem
                      value={option.marks}
                      id={option.marks}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={option.marks}
                      className="flex flex-col items-center justify-center p-6 bg-card border-2 border-border rounded-lg cursor-pointer peer-checked:border-primary peer-checked:bg-primary/5 hover:bg-card/80 transition-all duration-300"
                    >
                      <div className="text-3xl font-bold text-primary mb-2">
                        {option.marks}
                      </div>
                      <div className="text-lg font-semibold mb-1">
                        {option.description}
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        {option.questions}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-primary">
                        <Clock className="w-4 h-4" />
                        {option.time} minutes
                      </div>
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Test Guidelines */}
        <Card className="mb-8">
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

        {/* Start Test Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleStartTest}
            disabled={!selectedMarks}
            className="flex items-center gap-2 px-8 py-3 text-lg"
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
