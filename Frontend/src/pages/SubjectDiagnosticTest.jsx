// src/components/SubjectDiagnosticTest.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const questionBank = {
  physics: [
    { question: "Which unit is used to measure force?", options: ["Joule", "Pascal", "Newton", "Watt"], answer: "Newton" },
    { question: "If an object is in uniform motion, what can we say about the net external force acting on it?", options: ["It is increasing", "It is zero", "It is negative", "It is constant"], answer: "It is zero" },
    { question: "Which of the following electromagnetic waves has the highest frequency?", options: ["Microwaves", "Infrared", "Ultraviolet", "Gamma rays"], answer: "Gamma rays" },
  ],
  chemistry: [
    { question: "What is the chemical formula of water?", options: ["CO₂", "H₂O", "O₂", "HCl"], answer: "H₂O" },
    { question: "Which of these is a noble gas?", options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"], answer: "Argon" },
    { question: "Which of the following has the lowest pH?", options: ["Vinegar", "Milk", "Water", "Soap"], answer: "Vinegar" },
  ],
  biology: [
    { question: "Which organ is responsible for pumping blood in the human body?", options: ["Lungs", "Brain", "Heart", "Liver"], answer: "Heart" },
    { question: "What is the basic unit of life?", options: ["Atom", "Organ", "Cell", "Tissue"], answer: "Cell" },
    { question: "Which of the following carries oxygen in the blood?", options: ["White blood cells", "Platelets", "Red blood cells", "Plasma"], answer: "Red blood cells" },
  ],
  mathematics: [
    { question: "What is the square of 5?", options: ["10", "15", "20", "25"], answer: "25" },
    { question: "Solve: 2x + 3 = 7. What is x?", options: ["1", "2", "3", "4"], answer: "2" },
    { question: "What is the value of π (pi) approximately?", options: ["2.14", "3.14", "4.14", "3.41"], answer: "3.14" },
  ],
  history: [
    { question: "Who was the first President of India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Dr. Rajendra Prasad", "Sardar Patel"], answer: "Dr. Rajendra Prasad" },
    { question: "In which year did India gain independence?", options: ["1942", "1945", "1947", "1950"], answer: "1947" },
    { question: "Which movement was led by Mahatma Gandhi against the British salt laws?", options: ["Quit India Movement", "Swadeshi Movement", "Salt March", "Non-Cooperation Movement"], answer: "Salt March" },
  ],
  geography: [
    { question: "Which is the largest continent on Earth?", options: ["Africa", "Asia", "Europe", "Antarctica"], answer: "Asia" },
    { question: "What type of climate does the Sahara Desert have?", options: ["Tropical", "Polar", "Arid", "Temperate"], answer: "Arid" },
    { question: "Which river is the longest in the world?", options: ["Amazon", "Yangtze", "Ganges", "Nile"], answer: "Nile" },
  ],
};

const getDummyQuestions = (subject) => {
  const key = subject?.toLowerCase();
  return questionBank[key] || [];
};

export default function SubjectDiagnosticTest({ subject, onLevelDetermined }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setQuestions(getDummyQuestions(subject));
  }, [subject]);

  const handleSelect = (qIndex, option) => {
    setAnswers((prev) => ({ ...prev, [qIndex]: option }));
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.answer) score++;
    });

    let level = "Beginner";
    if (score >= questions.length * 0.8) level = "Advanced";
    else if (score >= questions.length * 0.5) level = "Intermediate";

    setSubmitted(true);
    setTimeout(() => onLevelDetermined(level), 1000);
  };

  return (
    <div className="w-[900px] min-h-[600px] bg-[#0F1D37] text-white p-8 rounded-2xl shadow-2xl border border-blue-500/30 mx-auto flex flex-col justify-between">
      <h2 className="text-2xl font-bold text-center mb-8">
        📚 Diagnostic Test: <span className="text-blue-400">{subject}</span>
      </h2>

      {questions.map((q, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8 p-5 bg-[#1A2747] rounded-xl border border-[#2B3A55] shadow-md"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm text-gray-400">
              Question {idx + 1} of {questions.length}
            </span>
          </div>
          <p className="mb-4 font-medium text-lg">{q.question}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {q.options.map((opt, i) => {
              const isSelected = answers[idx] === opt;
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(idx, opt)}
                  className={`px-4 py-3 rounded-lg border text-left transition-all duration-200
                    ${isSelected
                      ? "bg-blue-600 border-blue-500 shadow-lg"
                      : "bg-[#0F1D37] border-[#2B3A55] hover:bg-[#162448]"
                    }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </motion.div>
      ))}

      {!submitted && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={Object.keys(answers).length !== questions.length}
          className={`w-full mt-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300
            ${Object.keys(answers).length !== questions.length
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-blue-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg"
            }`}
        >
          Submit Test
        </motion.button>
      )}

      {submitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-green-400 mt-6 text-center font-semibold"
        >
          ✅ Evaluating your level...
        </motion.p>
      )}
    </div>
  );
}
