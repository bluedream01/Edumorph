import React, { useEffect, useState } from "react";
import { Upload, Brain, FileText, ClipboardCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import heroImage from "../assets/hero-blue-dark.jpg";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleStart = () => {
    if (isLoggedIn) {
      navigate("/notes");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-[#0f172a] text-white font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Maximize Your <span className="text-blue-400">Academic Performance</span> with AI
          </h1>
          <p className="text-lg text-gray-400">
            Upload notes, ask questions, and generate summaries & quizzes instantly.
            Transform your study experience with intelligent AI assistance.
          </p>

          <div className="flex space-x-4">
            <button
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
              onClick={handleStart}
            >
              {isLoggedIn ? "Go to Dashboard" : "Get Started"}
            </button>
            <button className="px-5 py-2.5 border border-white hover:bg-white hover:text-[#0f172a] rounded-lg transition">
              Watch Demo
            </button>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span> Free to start
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span> AI-powered
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span> Instant results
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-600 opacity-20 rounded-3xl blur-3xl animate-pulse"></div>
          <img
            src={heroImage}
            alt="AI Brain Book"
            className="relative z-10 w-full rounded-3xl shadow-lg"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Powerful Features for{" "}
            <span className="text-blue-400">Smarter Learning</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Upload Notes</h3>
              <p className="text-sm text-gray-400">
                Simply upload your study materials, lecture notes, or textbooks. Our AI processes any format instantly.
              </p>
            </div>

            <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Mindmaps</h3>
              <p className="text-sm text-gray-400">
                Generate interactive mindmaps from your content to visualize concepts and connections.
              </p>
            </div>

            <Link
              to="/summary"
              className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 hover:shadow-lg transition cursor-pointer block"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Summaries</h3>
              <p className="text-sm text-gray-400">
                Get concise, intelligent summaries that capture the key points and essential information.
              </p>
            </Link>

            <div className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-4">
                <ClipboardCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Practice Quizzes</h3>
              <p className="text-sm text-gray-400">
                Test your knowledge with AI-generated quizzes tailored to your study materials.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="text-sm px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg">
              Need help getting started? Check out our quick tutorial
            </button>
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
            {[
              {
                name: "Sarah Chen",
                role: "Medical Student",
                feedback:
                  "EduMorph transformed my study routine. The AI summaries helped me understand complex medical concepts faster than ever before.",
              },
              {
                name: "Marcus Rodriguez",
                role: "Engineering Student",
                feedback:
                  "The mindmap feature is incredible! It helped me visualize complex engineering systems and improved my problem-solving skills.",
              },
              {
                name: "Emily Johnson",
                role: "Psychology Major",
                feedback:
                  "Practice quizzes generated from my notes saved me hours of study time. My grades improved significantly this semester!",
              },
            ].map((student, i) => (
              <div
                key={i}
                className="bg-[#1e293b] border border-[#334155] rounded-xl p-6 space-y-4"
              >
                <p className="text-sm text-gray-300 italic">
                  &ldquo;{student.feedback}&rdquo;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">
                    {student.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{student.name}</p>
                    <p className="text-xs text-gray-400">{student.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 text-center text-gray-400 text-sm">
            Join thousands of students already using EduMorph
            <div className="flex justify-center gap-6 mt-2 text-xs">
              <span>✅ 10,000+ active users</span>
              <span>⭐ 4.9/5 rating</span>
              <span>🎓 50+ universities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] border-t border-[#1e293b] py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-gray-400 text-sm">
          <div>
            <h4 className="text-white font-bold text-lg mb-2">EduMorph</h4>
            <p className="mb-2">Transforming education with AI-powered learning tools for students worldwide.</p>
            <div className="flex space-x-4 mt-2">
              <a href="#"><i className="fab fa-twitter" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-github" /></a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Product</h5>
            <ul className="space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>API</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Company</h5>
            <ul className="space-y-1">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-2">Legal</h5>
            <ul className="space-y-1">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Data Protection</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">
          © 2024 EduMorph. All rights reserved. Made with ❤️ for students everywhere.
        </div>
      </footer>
    </div>
  );
}
