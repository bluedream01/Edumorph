// src/components/SubjectDiagnosticTest.jsx
import React, { useState, useEffect } from "react";


const getDummyQuestions = (subject) => [
  {
    question: `What is 2 + 2 in ${subject}?`,
    options: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    question: `Which is correct in ${subject}?`,
    options: ["A", "B", "C", "D"],
    answer: "C",
  },
  {
    question: `Select the best answer for ${subject}.`,
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
    answer: "Option 3",
  },
];

export default function SubjectDiagnosticTest({ subject, onLevelDetermined }) {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setQuestions(getDummyQuestions(subject)); // replace with fetch if needed
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
