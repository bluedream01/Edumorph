import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./quizlanding.css";

const QuizPdfUploadPage = () => {
  const [file, setFile] = useState(null);
  const [difficulty, setDifficulty] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleGenerateQuiz = async () => {
    if (!file || !difficulty || !numQuestions) {
      alert("Please fill out all fields and upload a PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);
    formData.append("difficulty", difficulty);
    formData.append("noOfQuestions", numQuestions); // 👈 Match backend key exactly

    setLoading(true);
    try {
      const response = await axios.post("/SummaryCall/quiz", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const questions = response.data?.quiz;

      if (!Array.isArray(questions) || questions.length === 0) {
        throw new Error("Invalid or empty quiz returned from backend.");
      }

      setQuizData({ questions });

      navigate("/quizgenerating", {
        state: {
          questions,
          difficulty,
          numQuestions,
        },
      });
    } catch (error) {
      console.error("Quiz generation failed:", error);
      alert("Failed to generate quiz. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="quiz-layout-container">
      <main className="quiz-main-content">
        <div className="quiz-content-container">
          <div className="quiz-section-header">
            <h1>Create a Quiz from PDF</h1>
          </div>

          <p className="quiz-description">
            Upload a PDF document to generate a quiz. Specify the difficulty
            level and the number of questions.
          </p>

          {/* Upload Area */}
          <div className="quiz-upload-container">
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            {file && <p style={{ marginTop: "8px" }}>Selected: {file.name}</p>}
          </div>

          {/* Settings */}
          <div className="quiz-forms">
            <div className="quiz-settings-form">
              <p>Difficulty Level</p>
              <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="" disabled>Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="quiz-settings-form">
              <p>Number of Questions</p>
              <select value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)}>
                <option value="" disabled>Number of Questions</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="quiz-submit">
            <button
              className="quiz-button-primary"
              onClick={handleGenerateQuiz}
              disabled={loading}
            >
              <span>{loading ? "Generating..." : "Generate Quiz"}</span>
            </button>
          </div>

          {/* Optional Preview */}
          {quizData?.questions?.length > 0 && (
            <div className="quiz-result">
              <h3>Generated Quiz</h3>
              <ul>
                {quizData.questions.map((q, index) => (
                  <li key={index}>
                    <strong>Q{index + 1}:</strong> {q.question}
                    <ul>
                      {q.options.map((opt, idx) => (
                        <li key={idx}>{opt}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default QuizPdfUploadPage;
