import React, { useState } from "react";
import { FaEdit, FaCamera, FaClipboardList, FaFileAlt } from "react-icons/fa";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Mindmaps", "Quizzes", "Notes"];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      {/* Profile Section */}
      <section className="max-w-5xl mx-auto mt-10 px-4">
        <div className="bg-[#1e2a47] p-6 rounded-lg text-center shadow-lg relative">
          {/* Avatar */}
          <div className="w-24 h-24 mx-auto relative">
            <img
              src="https://i.ibb.co/sQm3dSC/profile.png"
              alt="avatar"
              className="rounded-full w-full h-full border-4 border-[#0f172a]"
            />
            <div className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-500">
              <FaCamera />
            </div>
          </div>

          {/* Info */}
          <h2 className="text-2xl font-bold mt-4">Souhardya</h2>
          <p className="text-sm text-gray-300">Male</p>
          <p className="text-sm text-gray-400 mt-1">Email: souhardya.2208@gmail.com</p>
          <p className="text-sm text-gray-500">Joined in 2024</p>

          <button className="mt-4 bg-[#0f172a] px-4 py-2 rounded-md hover:bg-[#2b3c55] flex items-center gap-2 mx-auto text-sm">
            <FaEdit /> Edit
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex justify-between items-center gap-2 rounded-md bg-[#1f2937] px-2 py-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full py-2 rounded-md text-sm transition ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "hover:bg-[#2b3c55] text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dashboard Cards */}
        {activeTab === "Overview" && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Attempted Quizzes */}
            <div className="bg-[#152238] p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-[#9db4d2] mb-4">
                <FaClipboardList /> Attempted Quizzes
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center border-b border-[#2b3d59] pb-2">
                  <div>
                    <p className="text-white">History of Science</p>
                    <p className="text-gray-400 text-xs">85%</p>
                  </div>
                  <span className="bg-green-600 text-xs text-white px-3 py-1 rounded-full">Completed</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#2b3d59] pb-2">
                  <div>
                    <p className="text-white">Introduction to Psychology</p>
                    <p className="text-gray-400 text-xs">70%</p>
                  </div>
                  <span className="bg-green-600 text-xs text-white px-3 py-1 rounded-full">Completed</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white">Advanced Mathematics</p>
                  </div>
                  <span className="bg-yellow-500 text-xs text-white px-3 py-1 rounded-full">In Progress</span>
                </div>
              </div>
            </div>

            {/* Notes Shared */}
            <div className="bg-[#152238] p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 text-[#9db4d2] mb-4">
                <FaFileAlt /> Notes Shared
              </h3>
              <div className="space-y-4 text-sm text-white">
                <p className="border-b border-[#2b3d59] pb-2">Theories of Relativity</p>
                <p className="border-b border-[#2b3d59] pb-2">Cognitive Behavioral Therapy</p>
                <p>Calculus Fundamentals</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Profile;
