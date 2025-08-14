import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";
import { Collapsible, CollapsibleContent } from "./components/ui/collapsible";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { testSubjects } from "./data/testData";
import { getCourseData } from "./data/courseData";
import { useToast } from "../hooks/use-toast";

const TestSubjects = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedChapters, setSelectedChapters] = useState([]);
  const [openSubjects, setOpenSubjects] = useState([]);
  const [subjectChapters, setSubjectChapters] = useState({});
  const [mergedSubjects, setMergedSubjects] = useState([]);

  useEffect(() => {
    const courseData = getCourseData("10", "ICSE");
    if (courseData) {
      const chaptersMap = {};
      const merged = [];

      testSubjects.forEach(subject => {
        const subjectData = courseData.subjects.find(
          s => s.id.split("-")[0] === subject.id
        );
        if (subjectData) {
          chaptersMap[subject.id] = subjectData.chapters.map(chap => ({
            id: chap.id,
            title: chap.title,
            flashcards: chap.flashcards || []
          }));

          merged.push({
            ...subject,
            name: subjectData.name || subject.name
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
      setSelectedSubjects(prev => prev.filter(id => id !== subjectId));
      setSelectedChapters(prev =>
        prev.filter(chapterId => {
          const chapters = subjectChapters[subjectId] || [];
          return !chapters.some(chapter => chapter.id === chapterId);
        })
      );
      setOpenSubjects(prev => prev.filter(id => id !== subjectId));
    } else {
      setSelectedSubjects(prev => [...prev, subjectId]);
      setOpenSubjects(prev => [...prev, subjectId]);
    }
  };

  const handleChapterToggle = (chapterId) => {
    setSelectedChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const handleSubjectDropdownToggle = (subjectId) => {
    if (!selectedSubjects.includes(subjectId)) return;
    setOpenSubjects(prev =>
      prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
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
      `/test/marks?subjects=${selectedSubjects.join(",")}&chapters=${selectedChapters.join(",")}`
    );
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
            Select Test Subjects & Chapters
          </h1>

          <div></div>
        </div>

        {/* Instructions */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3">Instructions</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Select subjects by clicking on them</li>
              <li>• Choose specific chapters from the dropdown for each selected subject</li>
              <li>• You can select multiple subjects and chapters</li>
              <li>• Make sure to select at least one subject and chapter to proceed</li>
            </ul>
          </CardContent>
        </Card>

        {/* Subjects */}
        <div className="space-y-4 mb-8">
          {mergedSubjects.map((subject) => (
            <Card key={subject.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div
                  className={`flex items-center justify-between p-6 cursor-pointer transition-all duration-200 hover:bg-accent/50 ${
                    selectedSubjects.includes(subject.id)
                      ? "bg-primary/5 border-l-4 border-l-primary"
                      : ""
                  }`}
                  onClick={() => handleSubjectToggle(subject.id)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${subject.color} flex items-center justify-center text-2xl`}
                    >
                      {subject.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{subject.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Test your knowledge in {subject.name.toLowerCase()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {selectedSubjects.includes(subject.id) && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSubjectDropdownToggle(subject.id);
                        }}
                        className="flex items-center gap-2"
                      >
                        Chapters (
                        {
                          selectedChapters.filter(chapterId => {
                            const chapters = subjectChapters[subject.id] || [];
                            return chapters.some(
                              chapter => chapter.id === chapterId
                            );
                          }).length
                        }
                        )
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            openSubjects.includes(subject.id)
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </Button>
                    )}
                    <Checkbox
                      checked={selectedSubjects.includes(subject.id)}
                      className="pointer-events-none"
                    />
                  </div>
                </div>

                {selectedSubjects.includes(subject.id) && (
                  <Collapsible open={openSubjects.includes(subject.id)}>
                    <CollapsibleContent>
                      <div className="border-t bg-muted/20 p-4">
                        <h4 className="text-sm font-medium mb-3 text-muted-foreground">
                          Select Chapters:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {(subjectChapters[subject.id] || []).map(
                            (chapter) => (
                              <div
                                key={chapter.id}
                                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 hover:bg-accent ${
                                  selectedChapters.includes(chapter.id)
                                    ? "bg-primary/10 border border-primary/20"
                                    : "bg-background"
                                }`}
                                onClick={() => handleChapterToggle(chapter.id)}
                              >
                                <Checkbox
                                  checked={selectedChapters.includes(
                                    chapter.id
                                  )}
                                  className="pointer-events-none"
                                />
                                <div className="flex-1">
                                  <div className="text-sm font-medium">
                                    {chapter.title}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {chapter.flashcards.length} questions
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selection Count */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            {selectedSubjects.length} subject
            {selectedSubjects.length !== 1 ? "s" : ""} and{" "}
            {selectedChapters.length} chapter
            {selectedChapters.length !== 1 ? "s" : ""} selected
          </p>
        </div>

        {/* Proceed Button */}
        <div className="flex justify-center">
          <Button
            onClick={handleProceed}
            disabled={
              selectedSubjects.length === 0 || selectedChapters.length === 0
            }
            className="flex items-center gap-2 px-8"
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
