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

  const totalSteps = 6;

  const nextStep = () => {
  if (step < totalSteps) setStep((prev) => prev + 1);
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
  // console.log("Progress:", progressPercent);
  const cardClasses = (isSelected) =>
    `px-6 py-3 border rounded-md transition-colors duration-200 ${
      isSelected
        ? "bg-blue-600 text-white border-blue-500"
        : "bg-[#0D162A] text-white border-gray-600 hover:bg-blue-900"
    }`;
  const submitOnboarding = async () => {
    try {
      const response = await fetch("/api/auth/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // or however you store your token
        },
        body: JSON.stringify({
          class: classSelected,
          board: boardSelected,
          subjects: selectedSubjects,
          levels: subjectLevels,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit onboarding");
      }

      const data = await response.json();
      console.log("Onboarding submitted:", data);
    } catch (error) {
      console.error("Error submitting onboarding:", error.message);
    }
  };

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
                   <motion.div
                     key="step-0"
                     {...fadeMotionProps}
                     className="w-full max-w-3xl mx-auto bg-[#0F1D37] rounded-2xl px-10 py-16 text-center shadow-xl border border-blue-600/20"
                   >
                     <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6 leading-snug">
                       Let's Customize Your Learning Experience
                     </h2>
                     <p className="text-gray-400 mb-8 text-sm sm:text-sm leading-relaxed max-w-md mx-auto">
                       Answer a few quick questions to help us shape the platform around your goals.
                     </p>
                     <Button
                       onClick={nextStep}
                       className="px-10 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md"
                     >
                       Continue
                     </Button>
                   </motion.div>
                 )}




        {step === 1 && (
            <motion.div
              key="step-1"
              {...fadeMotionProps}
              className="w-full max-w-3xl mx-auto text-center"
            >
              <div className="bg-[#0F1D37] rounded-2xl px-10 py-16 shadow-xl border border-blue-600/20">
                <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
                  Which Class Are You In?
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center">
                  {[6, 7, 8, 9, 10].map((cls) => (
                    <button
                      key={cls}
                      className="mt-8 px-5 py-2 border border-white-100 text-white-100 hover:bg-blue-500 hover:text-white rounded-md font-medium transition duration-300"
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
    className="w-full max-w-3xl mx-auto text-center"
  >
    <div className="bg-[#0F1D37] rounded-2xl px-10 py-16 shadow-xl border border-blue-600/20">
      <h2 className="text-3xl sm:text-3xl font-semibold text-white mb-10">
        Select Your Academic Board
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
        {["ICSE", "CBSE", "WBCHSE"].map((board) => (
          <button
            key={board}
            className="px-5 py-2 border border-white-500 text-white-500 hover:bg-blue-500 hover:text-white rounded-md font-medium transition duration-300"
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
                className="w-full max-w-4xl mx-auto text-center"
              >
                <div className="bg-[#0F1D37] rounded-2xl px-10 py-16 shadow-xl border border-blue-600/20">
                  <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
                    Which Subjects Do You Need Help With?
                  </h2>
                  <p className="text-sm text-gray-400 mb-8">Select all that apply</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
                    {subjects.map((subj) => (
                      <button
                        key={subj.name}
                        onClick={() => toggleSubject(subj.name)}
                        className={`rounded-xl border flex flex-col items-center gap-2 px-5 py-4 text-sm font-medium transition-all duration-200 ${
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
                    className="mt-10 px-20 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
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
    className="text-center w-full max-w-3xl mx-auto"
  >
    <div className="bg-[#0F1D37] rounded-2xl px-10 py-14 shadow-xl border border-blue-600/20">
      <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-8">
        How Confident Are You in Each Subject?
      </h2>

      <div className="flex flex-col gap-4 mb-8">
        {selectedSubjects.map((subject) => (
          <div
            key={subject}
            className="flex justify-between items-center bg-[#0D162A] border border-[#1C2942] px-5 py-3 rounded-xl text-white"
          >
            <span className="font-medium flex items-center gap-3">
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
              className="bg-[#1C2942] text-white px-4 py-2 rounded-md border border-[#2B3A55] focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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
        className="mt-6 px-15 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300 shadow-md"
      >
        Next
      </Button>
    </div>
  </motion.div>
)}

{step === 5 && (
  <motion.div key="step-5" {...fadeMotionProps} className="text-center w-full max-w-3xl mx-auto">
    <div className="bg-[#0F1D37] rounded-2xl px-10 py-14 shadow-xl border border-blue-600/20">
      <CheckCircle className="text-green-400 w-12 h-12 mx-auto mb-5" />
      <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">All Set!</h2>
      <p className="text-white text-opacity-70 text-sm sm:text-base mb-8 leading-relaxed">
        You’ve successfully completed onboarding. Let’s begin your journey!
      </p>
      <Button
        className="mt-5 px-5 py-2 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition"
        onClick={nextStep} 
      >
        Start Learning
      </Button>
    </div>
  </motion.div>
)}

        {step === 6 && (
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
              <Button
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                onClick={submitOnboarding}
              >
                <Link to="/">Get Started</Link>
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
