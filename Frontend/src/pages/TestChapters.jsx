import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { ArrowLeft, BookOpen, ArrowRight } from "lucide-react";
import { getCourseData } from "./data/courseData";
import { useToast } from "../hooks/use-toast";

const TestChapters = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const subjectsParam = searchParams.get("subjects");
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [availableChapters, setAvailableChapters] = useState([]);

  useEffect(() => {
    if (!subjectsParam) {
      navigate("/test/subjects");
      return;
    }

    const courseData = getCourseData("10", "ICSE");
    if (!courseData) {
      toast({
        title: "Error",
        description: "Course data not found",
        variant: "destructive",
      });
      return;
    }

    const subjects = subjectsParam.split(",");
    const chapters = [];

    subjects.forEach((subjectId) => {
      const subject = courseData.subjects.find(
        (s) => s.id.split("-")[0] === subjectId
      );
      if (subject) {
        subject.chapters.forEach((chapter) => {
          chapters.push({
            ...chapter,
            subjectName: subject.name,
          });
        });
      }
    });

    setAvailableChapters(chapters);
  }, [subjectsParam, navigate, toast]);

  const handleChapterToggle = (chapterId) => {
    setSelectedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const handleSelectAll = () => {
    if (selectedChapters.length === availableChapters.length) {
      setSelectedChapters([]);
    } else {
      setSelectedChapters(availableChapters.map((chapter) => chapter.id));
    }
  };

  const handleProceed = () => {
    if (selectedChapters.length === 0) {
      toast({
        title: "Selection Required",
        description: "Please select at least one chapter",
        variant: "destructive",
      });
      return;
    }
    navigate(
      `/test/marks?subjects=${subjectsParam}&chapters=${selectedChapters.join(
        ","
      )}`
    );
  };

  const getSubjectColor = (subjectName) => {
    const colorMap = {
      Physics: "from-blue-400 to-blue-600",
      Chemistry: "from-green-400 to-green-600",
      Biology: "from-emerald-400 to-emerald-600",
      Mathematics: "from-purple-400 to-purple-600",
      History: "from-amber-400 to-amber-600",
      Geography: "from-cyan-400 to-cyan-600",
    };
    return colorMap[subjectName] || "from-gray-400 to-gray-600";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl p-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/test/subjects")}
            className="shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold">Select Chapters</h1>
            <p className="text-muted-foreground mt-2">
              Choose the chapters you want to include in your test
            </p>
          </div>
        </div>

        {/* Select All Button */}
        <div className="flex justify-between items-center mb-6">
          <Button
            variant="outline"
            onClick={handleSelectAll}
            className="flex items-center gap-2"
          >
            <Checkbox
              checked={
                selectedChapters.length === availableChapters.length &&
                availableChapters.length > 0
              }
              className="pointer-events-none"
            />
            {selectedChapters.length === availableChapters.length
              ? "Deselect All"
              : "Select All"}
          </Button>
          <span className="text-sm text-muted-foreground">
            {selectedChapters.length} of {availableChapters.length} chapters
            selected
          </span>
        </div>

        {/* Chapters Vertical List */}
        <div className="space-y-3 mb-8">
          {availableChapters.map((chapter) => (
            <div
              key={chapter.id}
              onClick={() => handleChapterToggle(chapter.id)}
              className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-all ${
                selectedChapters.includes(chapter.id)
                  ? "bg-primary/10 border-primary"
                  : "bg-card border-border hover:bg-muted"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${getSubjectColor(
                    chapter.subjectName
                  )} flex items-center justify-center text-white`}
                >
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">{chapter.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {chapter.subjectName}
                  </div>
                </div>
              </div>
              <Checkbox
                checked={selectedChapters.includes(chapter.id)}
                className="pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Proceed Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleProceed}
            size="lg"
            disabled={selectedChapters.length === 0}
            className="flex items-center gap-2 px-8 bg-gradient-to-r from-[#4e8cff] to-[#3572ef] hover:opacity-90"
          >
            Proceed to Marks Selection
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestChapters;
