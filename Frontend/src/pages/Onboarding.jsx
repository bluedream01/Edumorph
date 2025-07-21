import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Components/ui/button";
import { Progress } from "./Components/ui/progress";
import {
  BookOpen,
  Clock,
  Globe,
  Computer,
  Microscope,
  Book,
  LineChart,
  CheckCircle,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const subjects = [
  { name: "Mathematics", icon: <Book className="w-5 h-5 mb-1" /> },
  { name: "Science", icon: <Microscope className="w-5 h-5 mb-1" /> },
  { name: "English", icon: <BookOpen className="w-5 h-5 mb-1" /> },
  { name: "History", icon: <Clock className="w-5 h-5 mb-1" /> },
  { name: "Geography", icon: <Globe className="w-5 h-5 mb-1" /> },
  { name: "Computer", icon: <Computer className="w-5 h-5 mb-1" /> },
  { name: "Economics", icon: <LineChart className="w-5 h-5 mb-1" /> },
];

const recommendedTopics = {
  Mathematics: ["Algebra", "Geometry", "Trigonometry"],
  Science: ["Physics", "Chemistry", "Biology"],
  English: ["Grammar", "Reading", "Writing"],
  History: ["World Wars", "Indus Valley", "Modern India"],
  Geography: ["Maps", "Climate", "Population"],
  Computer: ["Programming", "Cybersecurity", "AI"],
  Economics: ["Microeconomics", "Macroeconomics", "Statistics"],
};

const OnboardingForm = () => {
  const [step, setStep] = useState(0);
  const [classSelected, setClassSelected] = useState(null);
  const [boardSelected, setBoardSelected] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjectLevels, setSubjectLevels] = useState({});
  const [expandedSubject, setExpandedSubject] = useState(null);

  const totalSteps = 5;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const selectClass = (cls) => {
    setClassSelected(cls);
    nextStep();
  };

  const selectBoard = (board) => {
    setBoardSelected(board);
    nextStep();
  };

  const toggleSubject = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const toggleExpanded = (subject) => {
    setExpandedSubject(expandedSubject === subject ? null : subject);
  };

  const progressPercent = ((step + 1) / (totalSteps + 1)) * 100;
  console.log("Progress:", progressPercent);
  const cardClasses = (isSelected) =>
    `px-6 py-3 border rounded-md transition-colors duration-200 ${
      isSelected
        ? "bg-blue-600 text-white border-blue-500"
        : "bg-[#0D162A] text-white border-gray-600 hover:bg-blue-900"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D162A] to-[#0D162A] flex flex-col items-center justify-start px-4 py-10">
      <div className="w-full max-w-3xl mb-10">
        <div className="w-full h-3 rounded-full bg-[#1C2942] overflow-hidden mt-4">
          <motion.div
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="step-0" {...fadeMotionProps} className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Let’s customize your learning experience.
            </h2>
            <Button onClick={nextStep} className="px-6 py-2 text-lg rounded-xl">
              Continue
            </Button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step-1"
            {...fadeMotionProps}
            className="text-center w-full max-w-3xl"
          >
            <div className="bg-[#0F1D37] rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Which class are you currently in?
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center">
                {[6, 7, 8, 9, 10].map((cls) => (
                  <button
                    key={cls}
                    className={cardClasses(classSelected === cls)}
                    onClick={() => selectClass(cls)}
                  >
                    Class {cls}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step-2"
            {...fadeMotionProps}
            className="text-center w-full max-w-3xl"
          >
            <div className="bg-[#0F1D37] rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Select your academic board
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
                {["ICSE", "CBSE", "WBCHSE"].map((board) => (
                  <button
                    key={board}
                    className={cardClasses(boardSelected === board)}
                    onClick={() => selectBoard(board)}
                  >
                    {board}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step-3"
            {...fadeMotionProps}
            className="text-center w-full max-w-4xl"
          >
            <div className="bg-[#0F1D37] rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Which subjects do you need the most help with?
              </h2>
              <p className="text-sm text-gray-400 mb-6">
                Select all that apply
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                {subjects.map((subj) => (
                  <button
                    key={subj.name}
                    onClick={() => toggleSubject(subj.name)}
                    className={`rounded-xl border flex flex-col items-center px-6 py-4 text-sm font-semibold transition-all duration-200 ${
                      selectedSubjects.includes(subj.name)
                        ? "bg-blue-500 text-white border-blue-500"
                        : "border-[#1C2942] hover:border-blue-400 text-white"
                    }`}
                  >
                    {subj.icon}
                    {subj.name}
                  </button>
                ))}
              </div>
              <Button
                onClick={nextStep}
                className="mt-6 px-6 py-2 text-lg rounded-xl"
              >
                Next
              </Button>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step-4"
            {...fadeMotionProps}
            className="text-center w-full max-w-3xl"
          >
            <div className="bg-[#0F1D37] rounded-2xl p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                What's your current level of understanding in these subjects?
              </h2>
              <div className="flex flex-col gap-4 mb-6">
                {selectedSubjects.map((subject) => (
                  <div
                    key={subject}
                    className="flex justify-between items-center bg-[#0D162A] border border-[#1C2942] px-4 py-3 rounded-xl text-white"
                  >
                    <span className="font-medium flex items-center gap-2">
                      {subjects.find((s) => s.name === subject)?.icon}
                      {subject}
                    </span>
                    <select
                      value={subjectLevels[subject] || ""}
                      onChange={(e) =>
                        setSubjectLevels((prev) => ({
                          ...prev,
                          [subject]: e.target.value,
                        }))
                      }
                      className="bg-[#1C2942] text-white px-3 py-2 rounded-md border border-[#2B3A55] focus:outline-none"
                    >
                      <option value="">Select level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                ))}
              </div>
              <Button
                onClick={nextStep}
                className="mt-4 px-6 py-2 text-lg rounded-xl"
              >
                Next
              </Button>
            </div>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div
            key="step-5"
            {...fadeMotionProps}
            className="text-center w-full max-w-5xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Here's what we'll help you focus on first!
            </h2>
            <div className="flex flex-col gap-6">
              {selectedSubjects.map((subject) => {
                const level = subjectLevels[subject]?.toLowerCase() || "novice";
                const icon = subjects.find((s) => s.name === subject)?.icon;
                const topics = recommendedTopics[subject] || [];
                const isExpanded = expandedSubject === subject;

                return (
                  <div
                    key={subject}
                    className="bg-[#0D162A] border border-[#1C2942] rounded-xl text-white p-6"
                  >
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleExpanded(subject)}
                    >
                      <div className="flex items-center gap-3">
                        {icon}
                        <div>
                          <h3 className="text-lg font-semibold">{subject}</h3>
                          <div className="inline-flex items-center px-2 py-1 bg-[#1C2942] text-white text-xs rounded-full mt-1">
                            {level}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-sm"
                        >
                          <span className="flex items-center gap-1">
                            <svg
                              width="14"
                              height="14"
                              fill="currentColor"
                              className="mr-1"
                            >
                              <path d="M4 2v10l8-5-8-5z" />
                            </svg>
                            Start Learning
                          </span>
                        </Button>
                        {isExpanded ? (
                          <ChevronUp className="text-gray-400" />
                        ) : (
                          <ChevronDown className="text-gray-400" />
                        )}
                      </div>
                    </div>

                    {isExpanded && (
                      <div className="mt-6 text-sm text-left">
                        {topics.length > 0 && (
                          <>
                            <p className="text-gray-400 mb-2">Weak Topics:</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {topics.map((topic, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-1 bg-[#1C2942] text-white text-xs rounded-full"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                            <div className="grid sm:grid-cols-3 text-sm text-gray-300 gap-4">
                              <p>
                                <span className="font-semibold text-white">
                                  Learning Path:
                                </span>{" "}
                                Structured lessons
                              </p>
                              <p>
                                <span className="font-semibold text-white">
                                  Recommended:
                                </span>{" "}
                                Practice tests
                              </p>
                              <p>
                                <span className="font-semibold text-white">
                                  AI Quiz:
                                </span>{" "}
                                Personalized questions
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white" >
                <Link to="/">
                Get Started
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="w-full sm:w-auto bg-[#1C2942] text-white hover:bg-[#26334f]"
              >
                Edit Preferences
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const fadeMotionProps = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
  transition: { duration: 0.4 },
};

export default OnboardingForm;
