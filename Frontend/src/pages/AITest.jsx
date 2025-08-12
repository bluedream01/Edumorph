import React, { useState } from "react";
import { classes, boards, courseData } from "./data/courseData";

export default function AITest() {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedChapters, setSelectedChapters] = useState({});
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState("select"); // 'select' | 'quiz' | 'review'

  const handleSubjectChange = (subjectId) => {
    setSelectedSubjects((prev) =>
      prev.includes(subjectId)
        ? prev.filter((id) => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const handleChapterChange = (subjectId, chapterId) => {
    setSelectedChapters((prev) => ({
      ...prev,
      [subjectId]: prev[subjectId]?.includes(chapterId)
        ? prev[subjectId].filter((id) => id !== chapterId)
        : [...(prev[subjectId] || []), chapterId],
    }));
  };

  const filteredCourseData = courseData.find(
    (c) => c.class === selectedClass && c.board === selectedBoard
  );

  const handleGenerateTest = async () => {
    if (selectedSubjects.length === 0) {
      alert("Please select at least one subject and chapter.");
      return;
    }

    setLoading(true);
    setReview(null);
    setQuestions([]);
    setAnswers({});

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to take the AI test.");
        setLoading(false);
        return;
      }

      // Build the subjects array in backend expected format:
      // [{ name: "Physics", chapters: ["Chapter1", "Chapter2"] }, ...]
      const subjectsPayload = selectedSubjects.map((subjectId) => {
        const subjectData = filteredCourseData.subjects.find(
          (sub) => sub.id === subjectId
        );

        const selectedChaps = selectedChapters[subjectId] || [];
        const chapterTitles = subjectData.chapters
          .filter((ch) => selectedChaps.includes(ch.id))
          .map((ch) => ch.title);

        return {
          name: subjectData.name,
          chapters: chapterTitles,
        };
      });

      const res = await fetch("/SummaryCall/ai-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ subjects: subjectsPayload }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to generate AI test");
      }

      const data = await res.json();
      if (!data.questions || !Array.isArray(data.questions)) {
        throw new Error("Invalid questions data received");
      }

      setQuestions(data.questions);
      setStep("quiz");
    } catch (error) {
      console.error("Error generating test:", error);
      alert(error.message);
    }
    setLoading(false);
  };

  const handleAnswerChange = (index, value) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }));
  };

  const handleReview = async () => {
    if (questions.length === 0) {
      alert("No questions to review.");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("You must be logged in to submit the AI review.");
        setLoading(false);
        return;
      }

      // Prepare payload as backend expects: questions and studentAnswers
      const questionsPayload = questions.map((q) => ({
        id: q.id,
        question: q.question,
        // Include options/answer if your backend requires
      }));

      const studentAnswersPayload = questions.map((q, idx) => ({
        id: q.id,
        answer: answers[idx] || "",
      }));

      const res = await fetch("/SummaryCall/ai-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          questions: questionsPayload,
          studentAnswers: studentAnswersPayload,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to get AI review");
      }

      const data = await res.json();
      setReview(data);
      setStep("review");
    } catch (error) {
      console.error("Error getting AI review:", error);
      alert(error.message);
    }
    setLoading(false);
  };

  const resetTest = () => {
    setStep("select");
    setSelectedClass("");
    setSelectedBoard("");
    setSelectedSubjects([]);
    setSelectedChapters({});
    setQuestions([]);
    setAnswers({});
    setReview(null);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Test Generator</h1>

      {step === "select" && (
        <>
          <div className="mb-4">
            <label className="block font-semibold mb-1">Select Class</label>
            <select
              value={selectedClass}
              onChange={(e) => {
                setSelectedClass(e.target.value);
                setSelectedBoard("");
                setSelectedSubjects([]);
                setSelectedChapters({});
              }}
              className="border p-2 rounded w-full bg-white text-black"
            >
              <option value="">-- Select Class --</option>
              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          </div>

          {selectedClass && (
            <div className="mb-4">
              <label className="block font-semibold mb-1">Select Board</label>
              <select
                value={selectedBoard}
                onChange={(e) => {
                  setSelectedBoard(e.target.value);
                  setSelectedSubjects([]);
                  setSelectedChapters({});
                }}
                className="border p-2 rounded w-full bg-white text-black"
              >
                <option value="">-- Select Board --</option>
                {boards.map((board) => (
                  <option key={board} value={board}>
                    {board}
                  </option>
                ))}
              </select>
            </div>
          )}

          {selectedClass && selectedBoard && filteredCourseData && (
            <div className="mt-4">
              {filteredCourseData.subjects.map((subject) => (
                <div
                  key={subject.id}
                  className="mb-4 border p-3 rounded bg-gray-800 bg-opacity-40"
                >
                  <label className="flex items-center cursor-pointer hover:bg-gray-700 p-2 rounded transition">
                    <input
                      type="checkbox"
                      checked={selectedSubjects.includes(subject.id)}
                      onChange={() => handleSubjectChange(subject.id)}
                      className="form-checkbox h-4 w-4 text-blue-500"
                    />
                    <span className="ml-2 font-semibold">{subject.name}</span>
                  </label>

                  {selectedSubjects.includes(subject.id) && (
                    <div className="ml-6 mt-2 space-y-1">
                      {subject.chapters.map((chapter) => (
                        <label
                          key={chapter.id}
                          className="flex items-center cursor-pointer hover:bg-gray-700 p-1 rounded transition"
                        >
                          <input
                            type="checkbox"
                            checked={
                              selectedChapters[subject.id]?.includes(chapter.id) ||
                              false
                            }
                            onChange={() => handleChapterChange(subject.id, chapter.id)}
                            className="form-checkbox h-4 w-4 text-green-500"
                          />
                          <span className="ml-2">{chapter.title}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {selectedSubjects.length > 0 && (
            <button
              onClick={handleGenerateTest}
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
            >
              {loading ? "Generating..." : "Generate AI Test"}
            </button>
          )}
        </>
      )}

      {step === "quiz" && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Your Quiz</h2>
          {questions.map((q, index) => (
            <div key={q.id || index} className="mb-4">
              <p className="font-medium">{q.question}</p>
              <input
                type="text"
                value={answers[index] || ""}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                className="border p-2 rounded w-full bg-white text-black mt-2"
                placeholder="Your answer..."
              />
            </div>
          ))}
          <button
            onClick={handleReview}
            disabled={loading}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            {loading ? "Reviewing..." : "Submit for AI Review"}
          </button>
          <button
            onClick={resetTest}
            disabled={loading}
            className="ml-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      )}

      {step === "review" && (
        <div className="mt-6 bg-gray-800 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">AI Feedback</h2>
          {review.results?.map((r, i) => (
            <div key={i} className="mb-3">
              <p className="font-medium">{questions[i]?.question}</p>
              <p className="text-sm text-gray-300">Your answer: {answers[i]}</p>
              <p className="text-sm text-green-400">
                Feedback: {r.explanation || r.feedback || "No feedback"}
              </p>
            </div>
          ))}
          <p className="mt-4 font-semibold">
            Score: {review.score || "N/A"}
          </p>
          <p>{review.review || ""}</p>
          <button
            onClick={resetTest}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Take Another Test
          </button>
        </div>
      )}
    </div>
  );
}
