import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Progress } from "./components/ui/progress";
import { Button } from "./components/ui/button";
import { BookOpen, Clock, Globe, Computer, Microscope } from "lucide-react";

const subjects = [
  { name: "Math", icon: <BookOpen className="w-5 h-5 mr-2" /> },
  { name: "Science", icon: <Microscope className="w-5 h-5 mr-2" /> },
  { name: "History", icon: <Clock className="w-5 h-5 mr-2" /> },
  { name: "Geography", icon: <Globe className="w-5 h-5 mr-2" /> },
  { name: "Computer", icon: <Computer className="w-5 h-5 mr-2" /> }
];

const levels = ["Beginner", "Novice", "Intermediate", "Expert"];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [level, setLevel] = useState(null);

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  const toggleSubject = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const pages = [
    // Step 0: Welcome Page
    <motion.div
      key="welcome"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full flex flex-col items-center justify-center gap-6"
    >
      <div className="relative w-full max-w-xl bg-[#111827] rounded-xl shadow-md p-6">
        <Progress value={progress} className="mb-6 h-3 bg-[#1F2937]" />
        <p className="text-center text-gray-300 text-lg">Let's customize your learning experience.</p>
        <div className="flex justify-center mt-6">
          <Button onClick={() => setStep(step + 1)} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
            Continue
          </Button>
        </div>
      </div>
    </motion.div>,

    // Step 1: Class & Board Selection
    <motion.div
      key="class-board"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col gap-6 items-center"
    >
      <h2 className="text-xl font-semibold text-white">Select your class:</h2>
      <div className="flex gap-4">
        {[6, 7, 8, 9, 10].map((cls) => (
          <Button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            variant={selectedClass === cls ? "default" : "outline"}
          >
            {cls}
          </Button>
        ))}
      </div>
      <h2 className="text-xl font-semibold text-white">Select your board:</h2>
      <div className="flex gap-4">
        {["CBSE", "ICSE", "WBCHSE"].map((board) => (
          <Button
            key={board}
            onClick={() => setSelectedBoard(board)}
            variant={selectedBoard === board ? "default" : "outline"}
          >
            {board}
          </Button>
        ))}
      </div>
      <Button onClick={() => setStep(step + 1)}>Continue</Button>
    </motion.div>,

    // Step 2: Subject Weaknesses
    <motion.div
      key="subjects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center gap-4"
    >
      <h2 className="text-xl font-semibold text-white">Which subjects do you find challenging?</h2>
      <div className="grid grid-cols-2 gap-4">
        {subjects.map((subj) => (
          <Button
            key={subj.name}
            onClick={() => toggleSubject(subj.name)}
            variant={selectedSubjects.includes(subj.name) ? "default" : "outline"}
            className="flex items-center"
          >
            {subj.icon}
            {subj.name}
          </Button>
        ))}
      </div>
      <Button onClick={() => setStep(step + 1)}>Continue</Button>
    </motion.div>,

    // Step 3: Knowledge Level
    <motion.div
      key="level"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="flex flex-col items-center gap-4"
    >
      <h2 className="text-xl font-semibold text-white">Your skill level:</h2>
      <div className="flex gap-4">
        {levels.map((lvl) => (
          <Button
            key={lvl}
            onClick={() => setLevel(lvl)}
            variant={level === lvl ? "default" : "outline"}
          >
            {lvl}
          </Button>
        ))}
      </div>
      <Button onClick={() => setStep(step + 1)}>Continue</Button>
    </motion.div>,

    // Step 4: Summary
    <motion.div
      key="summary"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center gap-6"
    >
      <h2 className="text-xl font-semibold text-white">You're all set!</h2>
      <p className="text-gray-400">These are your selected focus areas:</p>
      <div className="grid grid-cols-2 gap-4">
        {selectedSubjects.map((subj) => (
          <Button key={subj} className="text-left">
            {subj}
          </Button>
        ))}
      </div>
    </motion.div>
  ];

  return (
    <div className="min-h-screen bg-[#0B0F1C] text-white px-4 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <AnimatePresence mode="wait">{pages[step]}</AnimatePresence>
      </div>
    </div>
  );
};

export default Onboarding;
