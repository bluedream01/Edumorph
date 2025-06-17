import React from "react";
import "./quizlanding.css";

const QuizPdfUploadPage = () => {
  return (
    <div className="quiz-layout-container">
      {/* <header>
        <div className="quiz-logo-title">
          <div className="size-4">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2>QuizGenius</h2>
        </div>
        <div className="quiz-nav-links">
          <a href="#">Home</a>
          <a href="#">Quizzes</a>
          <a href="#">About</a>
          <button className="quiz-button-primary">
            <span>New Quiz</span>
          </button>
          <div
            className="quiz-avatar"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASHm_c2yF9J8MqGvQdzanO141TluaWoEWANpsofihUooqTuZLi-m35VQD4xECdxZqh3wA8YDucAS6EACA6VHXyZWCB76rz33hLv6LwAkS3_53t_pPPtvzHkSqayVy69SXQfer_pOhDFpJRL8i5u_gM7o6YkxfFe54vOZg-hNGAPaLibfdCwWNbpKF_az5gNWAQoG4dkbz43Uq1bewI8J7C1UqiK_5eOlLsvWk4WJnsal6j2uAVAI-mVBXSjHl2rt6cZ7x1Hsp5MgGF')"
            }}
          ></div>
        </div>
      </header> */}

      <main className="quiz-main-content">
        <div className="quiz-content-container">
          <div className="quiz-section-header">
            <h1>Create a Quiz from PDF</h1>
          </div>
          <p className="quiz-description">
            Upload a PDF document to generate a quiz. Specify the difficulty
            level and the number of questions you want in your quiz.
          </p>

          <div className="quiz-upload-container">
            <div className="quiz-upload-text">
              <h2>Drag and drop a PDF here, or</h2>
              <p>Browse files</p>
            </div>
            <button className="quiz-button-secondary">
              <span>Upload PDF</span>
            </button>
          </div>

          <div className="quiz-forms">
            <div className="quiz-settings-form">
              <p>Difficulty Level</p>
              <select>
                <option value="one" disabled>Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div className="quiz-settings-form">
              <p>Number of Questions</p>
              <select>
                <option value="one" disabled>Number of Questions</option>
                <option value="five">5</option>
                <option value="ten">10</option>
                <option value="fifteen">15</option>
                <option value="twenty">20</option>
                <option value="twenty-five">25</option>
                <option value="thirty">30</option>
              </select>
            </div>
          </div>

          <div className="quiz-submit">
            <button className="quiz-button-primary">
              <span>Generate Quiz</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizPdfUploadPage;
