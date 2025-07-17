import React, { useState, useRef } from "react";
import { Upload, FileText, X } from "lucide-react";

export default function CreateQuiz() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [difficulty, setDifficulty] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      alert("Please select a valid PDF file.");
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold">
          Create a Quiz from <span className="text-blue-400">PDF</span>
        </h1>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Upload a PDF document to generate a quiz. Specify the difficulty level and the number of questions.
        </p>
      </section>

      {/* File Upload Card */}
      <section className="px-4 max-w-2xl mx-auto">
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 bg-[#1e293b] text-center">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="hidden"
          />

          {!selectedFile ? (
            <div>
              <div className="w-16 h-16 bg-blue-600/20 rounded-full mx-auto flex items-center justify-center">
                <Upload className="w-8 h-8 text-blue-500" />
              </div>
              <h2 className="text-lg font-semibold mt-4">Upload PDF Document</h2>
              <p className="text-gray-400 text-sm">
                Drag and drop your file here or click to browse
              </p>
              <button
                className="mt-4 px-5 py-2 bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition"
                onClick={handleChooseFile}
              >
                Choose File
              </button>
            </div>
          ) : (
            <div>
              <div className="w-16 h-16 bg-green-600/20 rounded-full mx-auto flex items-center justify-center">
                <FileText className="w-8 h-8 text-green-500" />
              </div>
              <h2 className="text-lg font-semibold mt-4">File Selected</h2>
              <p className="text-gray-300 mt-1">{selectedFile.name}</p>
              <p className="text-xs text-gray-500">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <div className="mt-4 flex justify-center gap-4 flex-wrap">
                <button
                  onClick={handleChooseFile}
                  className="px-4 py-1 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition"
                >
                  Change File
                </button>
                <button
                  onClick={handleRemoveFile}
                  className="px-4 py-1 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md transition"
                >
                  <X className="inline w-4 h-4 mr-1" />
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Difficulty + Questions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div>
            <label className="block mb-2 text-sm font-medium">Difficulty Level</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Number of Questions</label>
            <select
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-[#0f172a] border border-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>Select Number</option>
              {[5, 10, 15, 20, 25].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Generate Button */}
        <div className="text-center mt-8">
          <button
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition"
            disabled={!difficulty || !numQuestions || !selectedFile}
          >
            Generate Quiz
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-24 py-16 bg-[#1e293b] text-center">
        <h2 className="text-3xl font-bold">
          Why Choose Our <span className="text-blue-400">Quiz Generator</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
          Experience the power of AI-driven quiz generation tailored to your learning needs.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 px-4 max-w-6xl mx-auto">
          {[
            {
              title: "Smart PDF Analysis",
              desc: "Advanced AI processes your documents to understand context and key concepts.",
              icon: <Upload className="w-6 h-6" />,
            },
            {
              title: "Targeted Questions",
              desc: "Questions are generated based on the most important topics in your material.",
              icon: <FileText className="w-6 h-6" />,
            },
            {
              title: "Instant Generation",
              desc: "Get your personalized quiz in seconds, ready to test your knowledge.",
              icon: <FileText className="w-6 h-6" />,
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0f172a] border border-gray-600 rounded-lg p-6">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 text-white rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
