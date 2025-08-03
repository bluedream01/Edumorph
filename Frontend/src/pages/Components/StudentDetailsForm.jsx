import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SUBJECTS = [
  "Physics",
  "Chemistry",
  "Biology",
  "Mathematics",
  "History",
  "Geography",
];

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    onboarding: {
      class: "",
      board: "",
      subjects: [],
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "undefined") {
      alert("Unauthorized. Please log in.");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["class", "board"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        onboarding: { ...prev.onboarding, [name]: value.trim() },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value.trim() }));
    }
  };

  const toggleSubject = (subject) => {
    setFormData((prev) => {
      const current = prev.onboarding.subjects;
      return {
        ...prev,
        onboarding: {
          ...prev.onboarding,
          subjects: current.includes(subject)
            ? current.filter((s) => s !== subject)
            : [...current, subject],
        },
      };
    });
  };

  const validateForm = () => {
    const { firstName, lastName, phoneNumber, onboarding } = formData;
    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !onboarding.class ||
      !onboarding.board ||
      onboarding.subjects.length === 0
    ) {
      alert("All fields are required.");
      return false;
    }
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Phone number must be exactly 10 digits.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const token = localStorage.getItem("token");
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phoneNumber,
      onboarding: {
        ...formData.onboarding,
        subjects: [...formData.onboarding.subjects].flat(), // 👈 ensures no nested arrays
      },
    };

    try {
      const res = await fetch("http://localhost:4000/api/contact-details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (res.ok) {
        alert(result.message || "Saved!");
        navigate("/profile");
      } else {
        alert(result.message || "Failed to save.");
        console.error(result);
      }
    } catch (err) {
      console.error(err);
      alert("Server error.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1e293b] p-8 rounded-xl shadow-xl w-full max-w-lg"
      >
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Complete Your Profile
        </h1>

        <div className="grid grid-cols-1 gap-4">
          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#1c2230] border border-gray-600 text-white"
          />

          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#1c2230] border border-gray-600 text-white"
          />

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number (10 digits)"
            value={formData.phoneNumber}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d{0,10}$/.test(value)) {
                handleChange(e); // allow only if it's up to 10 digits
              }
            }}
            className="p-3 rounded-lg bg-[#1c2230] border border-gray-600 text-white"
            maxLength={10}
            inputMode="numeric"
            pattern="[0-9]*"
          />

          <select
            name="class"
            value={formData.onboarding.class}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#1c2230] border border-gray-600 text-white w-full"
            required
          >
            <option value="">Select Class</option>
            {[6, 7, 8, 9, 10].map((cls) => (
              <option key={cls} value={cls}>
                Class {cls}
              </option>
            ))}
          </select>

          <select
            name="board"
            value={formData.onboarding.board}
            onChange={handleChange}
            className="p-3 rounded-lg bg-[#1c2230] border border-gray-600 text-white"
          >
            <option value="">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State">State</option>
          </select>

          <div>
            <p className="text-white font-semibold mb-2">Select Subjects</p>
            <div className="flex flex-wrap gap-2">
              {SUBJECTS.map((subject) => {
                const selected = formData.onboarding.subjects.includes(subject);
                return (
                  <motion.button
                    key={subject}
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => toggleSubject(subject)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
                      selected
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-gray-800 border-gray-600 text-gray-300"
                    }`}
                  >
                    {subject}
                  </motion.button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserDetailsForm;
