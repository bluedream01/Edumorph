import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizPage = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    // You can store selectedOption if needed
    navigate("/next-question"); // adjust route as necessary
  };

  const options = [
    "Motilal Nehru",
    "M.N. Roy",
    "Jawaharlal Nehru",
    "Dr. B.R. Ambedkar",
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-8 py-6 font-sans flex flex-col">
      {/* Top Navigation */}
      <button
        className="text-sm text-blue-400 hover:underline w-fit mb-4"
        onClick={() => navigate("/setup")}
      >
        ← Back to Setup
      </button>

      {/* Question Header */}
      <div className="mb-4">
        <p className="text-sm text-gray-400 mb-1">Question 1 of 5</p>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full w-[20%]"></div>
        </div>
      </div>

      {/* Question */}
      <div className="mt-6 mb-10">
        <h2 className="text-xl md:text-2xl font-semibold">
          Who first proposed the idea of a Constituent Assembly for India in 1934?
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-4">
        {options.map((option, index) => (
          <label
            key={index}
            className={`flex items-center border rounded-lg px-4 py-3 cursor-pointer transition ${
              selectedOption === option
                ? "border-blue-500 bg-[#1e293b]"
                : "border-gray-700 bg-[#1e293b] hover:border-blue-400"
            }`}
          >
            <input
              type="radio"
              name="quiz"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="mr-4 accent-blue-500"
            />
            {option}
          </label>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded-lg text-sm"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-sm"
          disabled={!selectedOption}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
