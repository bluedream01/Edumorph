import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { testSubjects } from "./data/testData";
import { getCourseData } from "./data/courseData";
import { useToast } from "../hooks/use-toast";

import { PiMathOperationsBold } from "react-icons/pi";
import { GiMaterialsScience } from "react-icons/gi";
import { FaFlask, FaDna, FaHistory, FaGlobeAsia } from "react-icons/fa";

// Icon map
const iconMap = {
  Mathematics: {
    icon: <PiMathOperationsBold className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-400",
  },
  Physics: {
    icon: <GiMaterialsScience className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-400",
  },
  Chemistry: {
    icon: <FaFlask className="w-8 h-8" />,
    color: "from-pink-500 to-red-400",
  },
  Biology: {
    icon: <FaDna className="w-8 h-8" />,
    color: "from-purple-500 to-pink-400",
  },
  History: {
    icon: <FaHistory className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-400",
  },
  Geography: {
    icon: <FaGlobeAsia className="w-8 h-8" />,
    color: "from-teal-500 to-green-400",
  },
};

const TestSubjects = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [subjectChapters, setSubjectChapters] = useState({});
  const [mergedSubjects, setMergedSubjects] = useState([]);

  useEffect(() => {
    const courseData = getCourseData("10", "ICSE");
    if (courseData) {
      const chaptersMap = {};
      const merged = [];

      testSubjects.forEach((subject) => {
        const subjectData = courseData.subjects.find(
          (s) => s.id.split("-")[0] === subject.id
        );
        if (subjectData) {
          chaptersMap[subject.id] = subjectData.chapters.map((chap) => ({
            id: chap.id,
            title: chap.title,
            flashcards: chap.flashcards || [],
          }));

          const subjectIconData = iconMap[subjectData.name] || {
            icon: null,
            color: "from-gray-400 to-gray-200",
          };

          merged.push({
            ...subject,
            name: subjectData.name || subject.name,
            icon: subjectIconData.icon,
            color: subjectIconData.color,
          });
        }
      });

      setSubjectChapters(chaptersMap);
      setMergedSubjects(merged);
    }
  }, []);

  const handleSubjectToggle = (subjectId) => {
    const isSelected = selectedSubjects.includes(subjectId);
    if (isSelected) {
      setSelectedSubjects((prev) => prev.filter((id) => id !== subjectId));
      setSelectedChapters((prev) =>
        prev.filter((chapterId) => {
          const chapters = subjectChapters[subjectId] || [];
          return !chapters.some((chapter) => chapter.id === chapterId);
        })
      );
    } else {
      setSelectedSubjects((prev) => [...prev, subjectId]);
    }
  };

  const handleChapterToggle = (chapterId) => {
    setSelectedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const handleProceed = () => {
    if (selectedSubjects.length === 0) {
      toast({
        title: "Selection Required",
        description: "Please select at least one subject",
        variant: "destructive",
      });
      return;
    }
    if (selectedChapters.length === 0) {
      toast({
        title: "Chapter Selection Required",
        description: "Please select at least one chapter",
        variant: "destructive",
      });
      return;
    }
    navigate(
      `/aitest/marks?subjects=${selectedSubjects.join(",")}&chapters=${selectedChapters.join(",")}`
    );
  };

return (
  <div className="min-h-screen bg-background relative">
    <div className="container mx-auto max-w-5xl pt-6 px-4">
      {/* Back Button */}
      <div className="mb-6">
        <Button
          variant="outline"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 ml-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>

      {/* Header */}
      <h1 className="text-3xl font-bold text-center mb-6">
        Select Test Subjects & Chapters
      </h1>

      {/* Instructions */}
      <Card className="mb-8 bg-[#111827] text-white">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-3">Instructions</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Select subjects by clicking on them</li>
            <li>• Choose specific chapters for each selected subject</li>
            <li>• Multiple selections allowed</li>
            <li>• Must select at least one subject and chapter to proceed</li>
          </ul>
        </CardContent>
      </Card>

      {/* Subjects */}
      <div className="space-y-4 mb-8">
        {mergedSubjects.map((subject) => (
          <Card
            key={subject.id}
            className={`overflow-hidden bg-[#111827] text-white cursor-pointer rounded-lg border ${
              selectedSubjects.includes(subject.id)
                ? "border-white"
                : "border-gray-600 hover:border-gray-400"
            } transition-all duration-200`}
            onClick={() => handleSubjectToggle(subject.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center text-white`}
                >
                  {subject.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{subject.name}</h3>
                  <p className="text-sm text-gray-300">
                    Test your knowledge in {subject.name.toLowerCase()}
                  </p>
                </div>
                <Checkbox
                  checked={selectedSubjects.includes(subject.id)}
                  className="pointer-events-none"
                />
              </div>

              {/* Chapters */}
              {selectedSubjects.includes(subject.id) && (
                <div className="mt-4 space-y-3">
                  {(subjectChapters[subject.id] || []).map((chapter) => (
                    <div
                      key={chapter.id}
                      className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all duration-200 cursor-pointer ${
                        selectedChapters.includes(chapter.id)
                          ? "bg-[#142C44] border-white"
                          : "bg-[#1F2937] border-gray-600 hover:border-gray-400"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChapterToggle(chapter.id);
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          checked={selectedChapters.includes(chapter.id)}
                          className="pointer-events-none"
                        />
                        <div>
                          <div className="text-sm font-medium">
                            {chapter.title}
                          </div>
                          <div className="text-xs text-gray-300">
                            {chapter.flashcards.length} questions
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Selection Count */}
      <div className="text-center mb-6">
        <p className="text-gray-300">
          {selectedSubjects.length} subject
          {selectedSubjects.length !== 1 ? "s" : ""} and{" "}
          {selectedChapters.length} chapter
          {selectedChapters.length !== 1 ? "s" : ""} selected
        </p>
      </div>

      {/* Proceed Button */}
      <div className="flex justify-center mb-10">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleProceed();
          }}
          disabled={
            selectedSubjects.length === 0 || selectedChapters.length === 0
          }
          className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-[#4F9DFE] to-[#3C82F6] text-black font-medium shadow-md hover:opacity-90 transition"
          size="lg"
        >
          Proceed to Marks Selection
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  </div>
);
};

export default TestSubjects;
