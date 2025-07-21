import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEdit,
  FaCamera,
  FaClipboardList,
  FaFileAlt,
  FaStar,
  FaUser,
} from "react-icons/fa";
import DefaultProfile from "../assets/user.jpg";

export default function Profile() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [isEditing, setIsEditing] = useState(false);
  const [profileImg, setProfileImg] = useState(DefaultProfile);
  const [userXp, setUserXp] = useState(0);

  const [originalData, setOriginalData] = useState({ name: "", email: "" });
  const [profileData, setProfileData] = useState({
    name: "",
    location: "Not Provided",
    email: "",
    xp: 0,
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:4000/api/auth/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch profile");

        const data = await res.json();
        const profile = {
          name: data.username || "Guest",
          email: data.email || "Not Available",
          location: "Not Provided",
          xp: typeof data.xp !== "undefined" ? data.xp : 0,
        };

        setProfileData(profile);
        setOriginalData({ name: profile.name, email: profile.email });
        setUserXp(profile.xp);
      } catch (err) {
        console.error("❌ Error fetching user data:", err.message);
      }
    };

    fetchProfile();
  }, []);

  const handleImageClick = () => fileInputRef.current.click();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImg(imageUrl);

      try {
        const response = await fetch("http://localhost:4000/api/auth/profile-image", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ imageUrl }),
        });
        const data = await response.json();
        localStorage.setItem("profileImage", data.profileImage);
      } catch (error) {
        console.error("Error updating profile image:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("http://localhost:4000/api/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: profileData.name,
          email: profileData.email,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        setOriginalData({ name: data.username, email: data.email });
        setIsEditing(false);
      } else {
        console.error("Update failed:", data.message);
      }
    } catch (err) {
      console.error("Error updating profile:", err.message);
    }
  };

  const handleCancel = () => {
    setProfileData((prev) => ({
      ...prev,
      name: originalData.name,
      email: originalData.email,
    }));
    setIsEditing(false);
  };

  const tabs = ["Overview", "Mindmaps", "Quizzes", "Notes"];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans">
      <section className="max-w-5xl mx-auto mt-10 px-4">
        {/* Profile Card */}
        <div className="bg-[#1e2a47] p-6 rounded-lg text-center shadow-lg relative">
          <div className="w-24 h-24 mx-auto relative">
            <img
              src={profileImg}
              alt="avatar"
              className="rounded-full w-full h-full border-4 border-[#0f172a] object-cover"
            />
            <div
              className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-500"
              onClick={handleImageClick}
            >
              <FaCamera />
            </div>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </div>

          {!isEditing ? (
            <>
              <h2 className="text-2xl font-bold mt-4">{profileData.name}</h2>
              <p className="text-sm text-gray-300">{profileData.location}</p>
              <p className="text-sm text-gray-400 mt-1">Email: {profileData.email}</p>
              <p className="text-sm text-gray-500">Joined in 2024</p>

              <div className="mt-4 text-yellow-400 flex justify-center items-center gap-2 text-sm font-medium">
                <FaStar className="text-yellow-300" />
                XP: {profileData.xp}
              </div>

              <div className="mt-4 flex justify-center gap-4">
                <button
                  className="bg-[#0f172a] px-4 py-2 rounded-md hover:bg-[#2b3c55] flex items-center gap-2 text-sm"
                  onClick={() => setIsEditing(true)}
                >
                  <FaEdit /> Edit
                </button>

                <button
                  className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-500 flex items-center gap-2 text-sm"
                  onClick={() => navigate("/onboarding")}
                >
                  <FaUser /> Fill Learning Details
                </button>
              </div>
            </>
          ) : (
            <div className="mt-4 flex flex-col gap-2">
              <input
                className="bg-[#2c3e5a] text-white p-2 rounded"
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleChange}
              />
              <input
                className="bg-[#2c3e5a] text-white p-2 rounded"
                type="text"
                name="location"
                value={profileData.location}
                onChange={handleChange}
              />
              <input
                className="bg-[#2c3e5a] text-white p-2 rounded"
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
              />
              <div className="flex gap-4 justify-center mt-2">
                <button onClick={handleSave} className="bg-green-600 px-4 py-1 rounded">
                  Save
                </button>
                <button onClick={handleCancel} className="bg-red-500 px-4 py-1 rounded">
                  Cancel
                </button>
              </div>
            </div>
          )}
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

        {/* Tab Content */}
        {activeTab === "Overview" && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quizzes */}
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

            {/* Notes */}
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
}
