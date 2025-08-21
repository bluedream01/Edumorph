import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Components/ui/button";
import SubjectDiagnosticTest from "./SubjectDiagnosticTest";
import { Link } from "react-router-dom";

// React Icons
import { PiMathOperationsBold } from "react-icons/pi";
import { GiMaterialsScience } from "react-icons/gi";
import { FaFlask } from "react-icons/fa";
import { FaDna, FaHistory, FaGlobeAsia } from "react-icons/fa";
import { CheckCircle } from "lucide-react";
import { ChevronUp, ChevronDown } from "lucide-react";

const subjects = [
  { name: "Mathematics", icon: <PiMathOperationsBold className="w-6 h-6" /> },
  { name: "Physics", icon: <GiMaterialsScience className="w-6 h-6" /> },
  { name: "Chemistry", icon: <FaFlask className="w-6 h-6" /> },
  { name: "Biology", icon: <FaDna className="w-6 h-6" /> },
  { name: "History", icon: <FaHistory className="w-6 h-6" /> },
  { name: "Geography", icon: <FaGlobeAsia className="w-6 h-6" /> },
];

const recommendedTopics = {
  Mathematics: ["Algebra", "Geometry", "Trigonometry"],
  Science: ["Physics", "Chemistry", "Biology"],
  English: ["Grammar", "Reading", "Writing"],
  History: ["World Wars", "Indus Valley", "Modern India"],
  Geography: ["Maps", "Climate", "Population"],
};

const OnboardingForm = () => {
  const [step, setStep] = useState(0);
  const [classSelected, setClassSelected] = useState(null);
  const [boardSelected, setBoardSelected] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [subjectLevels, setSubjectLevels] = useState({});
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [diagnosticStepIndex, setDiagnosticStepIndex] = useState(0);

  const totalSteps = 6;

  const nextStep = () => step < totalSteps && setStep((prev) => prev + 1);

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

  const submitOnboarding = async () => {
    try {
      const response = await fetch("/api/auth/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          class: classSelected,
          board: boardSelected,
          subjects: selectedSubjects,
          levels: subjectLevels,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit onboarding");

      const data = await response.json();
      console.log("Onboarding submitted:", data);
    } catch (error) {
      console.error("Error submitting onboarding:", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D162A] to-[#0D162A] flex flex-col items-center justify-start px-4 py-10">
      {/* Progress Bar */}
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
        {/* Step 0: Welcome */}
        {step === 0 && (
          <motion.div
            key="step-0"
            {...fadeMotionProps}
            className="w-full max-w-3xl mx-auto bg-[#0F1D37] rounded-2xl px-10 py-16 text-center shadow-xl border border-blue-600/20"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
              Let's Customize Your Learning Experience
            </h2>
            <p className="text-gray-400 mb-8 text-sm max-w-md mx-auto">
              Answer a few quick questions to help us shape the platform around
              your goals.
            </p>
            <Button
              onClick={nextStep}
              className="px-10 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md"
            >
              Continue
            </Button>
          </motion.div>
        )}

        {/* Step 1: Select Class */}
        {step === 1 && (
          <motion.div
            key="step-1"
            {...fadeMotionProps}
            className="w-full max-w-3xl mx-auto text-center"
          >
            <div className="bg-[#0F1D37] rounded-2xl px-10 py-16 shadow-xl border border-blue-600/20">
              <h2 className="text-3xl font-semibold text-white mb-6">
                Which Class Are You In?
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[6, 7, 8, 9, 10].map((cls) => (
                  <button
                    key={cls}
                    className="px-5 py-3 border border-gray-500 text-white rounded-md hover:bg-blue-500 hover:text-white transition"
                    onClick={() => selectClass(cls)}
                  >
                    Class {cls}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Select Board */}
        {step === 2 && (
          <motion.div
            key="step-2"
            {...fadeMotionProps}
            className="w-full max-w-3xl mx-auto text-center"
          >
            <div className="bg-[#0F1D37] rounded-2xl px-10 py-16 shadow-xl border border-blue-600/20">
              <h2 className="text-3xl font-semibold text-white mb-8">
                Select Your Academic Board
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["ICSE", "CBSE", "WBCHSE"].map((board) => (
                  <button
                    key={board}
                    className="px-5 py-3 border border-gray-500 text-white rounded-md hover:bg-blue-500 hover:text-white transition"
                    onClick={() => selectBoard(board)}
                  >
                    {board}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Select Subjects */}
        {step === 3 && (
          <motion.div
            key="step-3"
            {...fadeMotionProps}
            className="w-full max-w-4xl mx-auto text-center"
          >
            <div className="bg-[#0F1D37] rounded-2xl px-10 py-16 shadow-xl border border-blue-600/20">
              <h2 className="text-3xl font-semibold text-white mb-2">
                Which Subjects Do You Need Help With?
              </h2>
              <p className="text-sm text-gray-400 mb-8">
                Select all that apply
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {subjects.map((subj) => (
                  <button
                    key={subj.name}
                    onClick={() => toggleSubject(subj.name)}
                    className={`rounded-xl flex flex-col items-center gap-3 px-6 py-5 text-sm font-medium transition-all duration-300 ${
                      selectedSubjects.includes(subj.name)
                        ? "bg-blue-500 text-white shadow-blue-500/30 border border-blue-500"
                        : "bg-[#1C2942] border border-transparent text-white hover:border-blue-400"
                    }`}
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#0D162A] text-blue-400 shadow-inner">
                      {subj.icon}
                    </div>
                    <span>{subj.name}</span>
                  </button>
                ))}
              </div>
              <Button
                onClick={() => {
                  if (!selectedSubjects.length) {
                    alert("Please select at least one subject.");
                    return;
                  }
                  nextStep();
                }}
                disabled={!selectedSubjects.length}
                className={`mt-10 px-10 py-3 font-medium rounded-lg ${
                  !selectedSubjects.length
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
              >
                Next
              </Button>
            </div>
          </motion.div>
        )}

        {/* Diagnostic Test */}
        {step === 4 && diagnosticStepIndex < selectedSubjects.length && (
          <SubjectDiagnosticTest
            key={selectedSubjects[diagnosticStepIndex]}
            subject={selectedSubjects[diagnosticStepIndex]}
            onLevelDetermined={(level) => {
              const currentSubject = selectedSubjects[diagnosticStepIndex];
              setSubjectLevels((prev) => ({
                ...prev,
                [currentSubject]: level,
              }));

              setTimeout(() => {
                if (diagnosticStepIndex + 1 < selectedSubjects.length) {
                  setDiagnosticStepIndex((prev) => prev + 1);
                } else {
                  nextStep();
                }
              }, 300);
            }}
          />
        )}
        {/* Step 5: Completion */}
        {step === 5 && (
          <motion.div
            key="step-5"
            {...fadeMotionProps}
            className="text-center w-full max-w-3xl mx-auto"
          >
            <div className="bg-[#0F1D37] rounded-2xl px-10 py-14 shadow-xl border border-blue-600/20">
              <CheckCircle className="text-green-400 w-12 h-12 mx-auto mb-5" />
              <h2 className="text-3xl font-semibold text-white mb-4">
                All Set!
              </h2>
              <p className="text-gray-300 text-sm mb-8">
                You’ve successfully completed onboarding. Let’s begin your
                journey!
              </p>
              <Button
                className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                onClick={() => {
                  submitOnboarding();
                  nextStep();
                }}
              >
                Start Learning
              </Button>
            </div>
          </motion.div>
        )}

        {/* Step 6: Recommendations */}
        {step === 6 && (
          <motion.div
            key="step-6"
            {...fadeMotionProps}
            className="text-center w-full max-w-5xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">
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
                          <div className="px-2 py-1 bg-[#1C2942] text-xs rounded-full mt-1">
                            {level}
                          </div>
                        </div>
                      </div>
                      {isExpanded ? <ChevronUp /> : <ChevronDown />}
                    </div>

                    {isExpanded && topics.length > 0 && (
                      <div className="mt-6 text-sm text-left">
                        <p className="text-gray-400 mb-2">Weak Topics:</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {topics.map((topic, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#1C2942] text-xs rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={submitOnboarding}
              >
                <Link to="/">Get Started</Link>
              </Button>
              <Button
                variant="secondary"
                className="bg-[#1C2942] text-white hover:bg-[#26334f]"
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
