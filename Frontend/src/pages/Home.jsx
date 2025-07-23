
import React, { useEffect, useState } from "react";
import { Upload, Brain, FileText, ClipboardCheck, BookOpen } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../assets/hero-blue-dark.jpg";


export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);


  const handleStart = () => {
    if (isLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };


  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Maximize Your Academic Performance with AI</h1>
          <p className="hero-text">
            EduMorph harnesses advanced AI to elevate your learning experience. Upload notes, ask questions, and receive summaries and quizzes to master any subject.
          </p>
          {!isLoggedIn && (
            <button className="hero-btn" onClick={() => navigate('/login')}>
              Get Started
            </button>
          )}
        </div>
      </section>


      {/* Features Section */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Powerful Features for <span className="text-blue-400">Smarter Learning</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
            <Link to="/notes" className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 w-full hover:shadow-lg transition cursor-pointer">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload Notes</h3>
              <p className="text-sm text-gray-400">
                Simply upload your study materials, lecture notes, or textbooks. Our AI processes any format instantly.
              </p>
            </Link>

            <Link to="/mindmap" className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 w-full hover:shadow-lg transition cursor-pointer">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Mindmaps</h3>
              <p className="text-sm text-gray-400">
                Generate interactive mindmaps from your content to visualize concepts and connections.
              </p>
            </Link>

            <Link to="/summary" className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 w-full hover:shadow-lg transition cursor-pointer">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Summaries</h3>
              <p className="text-sm text-gray-400">
                Get concise, intelligent summaries that capture the key points and essential information.
              </p>
            </Link>

            <Link to="/quizzes" className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 w-full hover:shadow-lg transition cursor-pointer">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Practice Quizzes</h3>
              <p className="text-sm text-gray-400">
                Test your knowledge with AI-generated quizzes tailored to your study materials.
              </p>
            </Link>

            {/* Centered Courses Card Below */}
            <Link
              to="/courses"
              className="col-span-full bg-[#1e293b] border border-[#334155] rounded-xl p-6 w-full sm:w-[40%] h-52 mt-6 hover:shadow-lg transition cursor-pointer text-center"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Courses</h3>
              <p className="text-sm text-gray-400">
                Access structured courses with chapters and interactive flashcards for comprehensive learning
              </p>
            </Link>
          </div>

          {/* Optional: Tutorial Hint */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 text-sm text-primary bg-primary/10 px-4 py-2 rounded-full">
              <span>💡 Need help getting started? Check out our quick tutorial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Success Stories from{" "}
            <span className="text-blue-400">Real Students</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Sarah Chen", "Marcus Rodriguez", "Emily Johnson"].map((name, i) => {
              const roles = ["Medical Student", "Engineering Student", "Psychology Major"];
              const feedbacks = [
                "EduMorph transformed my study routine. The AI summaries helped me understand complex medical concepts faster than ever before.",
                "The mindmap feature is incredible! It helped me visualize complex engineering systems and improved my problem-solving skills.",
                "Practice quizzes generated from my notes saved me hours of study time. My grades improved significantly this semester!",
              ];
              return (
                <div key={i} className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 space-y-4">
                  <p className="text-sm text-gray-300 italic">&ldquo;{feedbacks[i]}&rdquo;</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{name}</p>
                      <p className="text-xs text-gray-400">{roles[i]}</p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
          <div className="story-card">
            <img src={LuffyImage} className="story-image" alt="Student 2" />
            <p className="story-text">“I was struggling with complex topics...”</p>
            <p className="story-author">- David Chan</p>
          </div>
          <div className="story-card">
            <img src={RobinImage} className="story-image" alt="Student 3" />
            <p className="story-text">“Thanks to EduMorph, I can now study more effectively...”</p>
            <p className="story-author">- Emily Rodriguez</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-row">
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <span className="footer-text">©2025 EduMorph. All rights reserved.</span>
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
        </div>
      </footer>
    </>
  );
}
