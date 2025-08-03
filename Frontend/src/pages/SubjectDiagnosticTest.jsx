// src/components/SubjectDiagnosticTest.jsx
import React, { useState, useEffect } from "react";

const questionBank = {
  physics: [
    {
      question: "Which unit is used to measure force?",
      options: ["Joule", "Pascal", "Newton", "Watt"],
      answer: "Newton",
    },
    {
      question: "If an object is in uniform motion, what can we say about the net external force acting on it?",
      options: ["It is increasing", "It is zero", "It is negative", "It is constant"],
      answer: "It is zero",
    },
    {
      question: "Which of the following electromagnetic waves has the highest frequency?",
      options: ["Microwaves", "Infrared", "Ultraviolet", "Gamma rays"],
      answer: "Gamma rays",
    },
  ],
  chemistry: [
    {
      question: "What is the chemical formula of water?",
      options: ["CO₂", "H₂O", "O₂", "HCl"],
      answer: "H₂O",
    },
    {
      question: "Which of these is a noble gas?",
      options: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
      answer: "Argon",
    },
    {
      question: "Which of the following has the lowest pH?",
      options: ["Vinegar", "Milk", "Water", "Soap"],
      answer: "Vinegar",
    },
  ],
  biology: [
    {
      question: "Which organ is responsible for pumping blood in the human body?",
      options: ["Lungs", "Brain", "Heart", "Liver"],
      answer: "Heart",
    },
    {
      question: "What is the basic unit of life?",
      options: ["Atom", "Organ", "Cell", "Tissue"],
      answer: "Cell",
    },
    {
      question: "Which of the following carries oxygen in the blood?",
      options: ["White blood cells", "Platelets", "Red blood cells", "Plasma"],
      answer: "Red blood cells",
    },
  ],
  mathematics: [
    {
      question: "What is the square of 5?",
      options: ["10", "15", "20", "25"],
      answer: "25",
    },
    {
      question: "Solve: 2x + 3 = 7. What is x?",
      options: ["1", "2", "3", "4"],
      answer: "2",
    },
    {
      question: "What is the value of π (pi) approximately?",
      options: ["2.14", "3.14", "4.14", "3.41"],
      answer: "3.14",
    },
  ],
  history: [
    {
      question: "Who was the first President of India?",
      options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Dr. Rajendra Prasad", "Sardar Patel"],
      answer: "Dr. Rajendra Prasad",
    },
    {
      question: "In which year did India gain independence?",
      options: ["1942", "1945", "1947", "1950"],
      answer: "1947",
    },
    {
      question: "Which movement was led by Mahatma Gandhi against the British salt laws?",
      options: ["Quit India Movement", "Swadeshi Movement", "Salt March", "Non-Cooperation Movement"],
      answer: "Salt March",
    },
  ],
  geography: [
    {
      question: "Which is the largest continent on Earth?",
      options: ["Africa", "Asia", "Europe", "Antarctica"],
      answer: "Asia",
    },
    {
      question: "What type of climate does the Sahara Desert have?",
      options: ["Tropical", "Polar", "Arid", "Temperate"],
      answer: "Arid",
    },
    {
      question: "Which river is the longest in the world?",
      options: ["Amazon", "Yangtze", "Ganges", "Nile"],
      answer: "Nile",
    },
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
    <div className="bg-[#0F1D37] text-white p-6 rounded-xl shadow-xl border border-blue-600/20 max-w-3xl mx-auto text-left">
      <h2 className="text-xl font-semibold mb-6 text-center">
        Diagnostic Test: {subject}
      </h2>
      {questions.map((q, idx) => (
        <div key={idx} className="mb-6">
          <p className="mb-2 font-medium">{q.question}</p>
          <div className="grid grid-cols-2 gap-2">
            {q.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelect(idx, opt)}
                className={`p-2 rounded-md border ${
                  answers[idx] === opt
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-[#1C2942] text-white border-[#2B3A55]"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={Object.keys(answers).length !== questions.length}
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Submit
        </button>
      )}
      {submitted && (
        <p className="text-green-400 mt-4 text-center">
          Evaluating your level...
        </p>
      )}
    </div>
  );
}
