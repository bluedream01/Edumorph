import React, { useEffect, useState } from "react";
import { Upload, Brain, FileText, ClipboardCheck, BookOpen, Target, Star } from "lucide-react";
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
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-[#0f172a] text-white font-sans">
      {/* Hero Section */}
      <section className="bg-[#0f172a] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Maximize Your <span className="text-blue-400">Academic Performance</span> with AI
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              Upload notes, ask questions, and generate summaries & quizzes instantly.
              Transform your study experience with intelligent AI assistance.
            </p>

            <div className="flex items-center gap-4 mb-6">
              <a
                href="#dashboard"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg font-medium transition"
              >
                Go to Dashboard
              </a>
            </div>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Free to start
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                AI-powered
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Instant results
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end w-full md:w-[105%] relative">
            {/* Blue Glow */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-[90%] h-[90%] bg-blue-500 rounded-full blur-3xl opacity-50 animate-glow"></div>
            </div>

            {/* Image */}
            <img
              src={heroImage}
              alt="AI Brain Book"
              className="relative rounded-2xl shadow-lg w-full h-full object-cover z-10"
            />
          </div>




        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Powerful Features for <span className="text-blue-400">Smart Learning</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Everything you need to enhance your academic performance, powered by cutting-edge AI technology.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Feature Card Component */}
            {[
              {
                link: "/notes",
                icon: <Upload className="w-7 h-7 text-white" />,
                title: "Upload Notes",
                desc: "Simply upload your study materials, lecture notes, or textbooks. Our AI processes any format instantly."
              },
              {
                link: "/mindmap",
                icon: <Brain className="w-7 h-7 text-white" />,
                title: "AI Mindmaps",
                desc: "Generate interactive mindmaps from your content to visualize concepts and connections."
              },
              {
                link: "/summary",
                icon: <FileText className="w-7 h-7 text-white" />,
                title: "Smart Summaries",
                desc: "Get concise, intelligent summaries that capture the key points and essential information."
              },
              {
                link: "/quizzes",
                icon: <ClipboardCheck className="w-7 h-7 text-white" />,
                title: "Practice Quizzes",
                desc: "Test your knowledge with AI-generated quizzes tailored to your study materials."
              },
              {
                link: "/courses",
                icon: <BookOpen className="w-7 h-7 text-white" />,
                title: "Courses",
                desc: "Access structured courses with chapters and interactive content for comprehensive learning."
              },
              {
                link: "/aitest",
                icon: <Target className="w-7 h-7 text-white" />,
                title: "Tests",
                desc: "Take comprehensive tests across multiple subjects with detailed performance analysis."
              }
            ].map((feature, i) => (
              <Link
                key={i}
                to={feature.link}
                className="flex flex-col justify-center items-center bg-[#0f172a] border border-[#334155] rounded-2xl p-8 text-center 
                     transition-transform duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 h-full"
              >
                <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-base text-gray-400">{feature.desc}</p>
              </Link>
            ))}

          </div>
        </div>
      </section>




      {/* Testimonials */}
      <section className="bg-[#0f172a] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">

          {/* Heading */}
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Success Stories from <span className="text-blue-400">EduMorph</span>

          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Discover how EduMorph is helping students achieve their academic goals and excel in their studies.
          </p>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-[#0f172a] border border-[#334155] rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-blue-400 fill-blue-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "EduMorph transformed my study routine. The AI summaries helped me understand complex medical concepts faster than ever before."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold mr-3">
                  SC
                </div>
                <div>
                  <h4 className="font-semibold text-white">Sarah Chen</h4>
                  <p className="text-gray-400 text-sm">Medical Student</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0f172a] border border-[#334155] rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-blue-400 fill-blue-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "The mindmap feature is incredible! It helped me visualize complex engineering systems and improved my problem-solving skills."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold mr-3">
                  MR
                </div>
                <div>
                  <h4 className="font-semibold text-white">Marcus Rodriguez</h4>
                  <p className="text-gray-400 text-sm">Engineering Student</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0f172a] border border-[#334155] rounded-lg p-6 text-left">
              <div className="flex items-center mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-blue-400 fill-blue-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Practice quizzes generated from my notes saved me hours of study time. My grades improved significantly this semester!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold mr-3">
                  EJ
                </div>
                <div>
                  <h4 className="font-semibold text-white">Emily Johnson</h4>
                  <p className="text-gray-400 text-sm">Psychology Major</p>
                </div>
              </div>
            </div>

          </div>

          {/* Stats at bottom */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              10,000+ active users
            </div>
            <div className="flex items-center gap-2">
              ⭐ 4.9/5 rating
            </div>
            <div className="flex items-center gap-2">
              ✅ 98% recommend
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
