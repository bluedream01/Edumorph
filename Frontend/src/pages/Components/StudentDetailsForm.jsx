import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    onboarding: {
      class: '',
      board: '',
      subjects: '',
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || token === 'undefined') {
      alert('Unauthorized. Please log in.');
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (['class', 'board', 'subjects'].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        onboarding: {
          ...prev.onboarding,
          [name]: value.trim(),
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value.trim(),
      }));
    }
  };

  const validateForm = () => {
    const { firstName, lastName, phoneNumber, onboarding } = formData;

    if (!firstName || !lastName || !phoneNumber || !onboarding.class || !onboarding.board || !onboarding.subjects) {
      alert('All fields are required.');
      return false;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      alert('Phone number must be exactly 10 digits.');
      return false;
    }

    if (!/^\d{1,2}$/.test(onboarding.class) || +onboarding.class < 1 || +onboarding.class > 12) {
      alert('Class must be a number between 1 and 12.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const token = localStorage.getItem('token');
    if (!token || token === 'undefined') {
      alert('Unauthorized. Missing or invalid token.');
      return;
    }

    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phoneNumber,
      onboarding: { ...formData.onboarding },
    };

    try {
      const response = await fetch('http://localhost:4000/api/contact-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || 'Details saved successfully!');
        navigate('/profile');
      } else {
        console.error('Backend error:', result);
        alert(result.message || 'Failed to save user details.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Server error occurred.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a] p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-[#1e293b] p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Complete Your Profile</h2>

        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 bg-[#1c2230] border border-gray-600 rounded text-white"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 bg-[#1c2230] border border-gray-600 rounded text-white"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="class"
            placeholder="Class (1–12)"
            value={formData.onboarding.class}
            onChange={handleChange}
            className="w-full p-2 bg-[#1c2230] border border-gray-600 rounded text-white"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number (10 digits)"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-2 bg-[#1c2230] border border-gray-600 rounded text-white"
            required
          />
        </div>

        <div className="mb-4">
          <select
            name="board"
            value={formData.onboarding.board}
            onChange={handleChange}
            className="w-full p-2 bg-[#1c2230] border border-gray-600 rounded text-white"
            required
          >
            <option value="">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="ICSE">ICSE</option>
            <option value="State">State</option>
          </select>
        </div>

        <div className="mb-6">
          <select
            name="subjects"
            value={formData.onboarding.subjects}
            onChange={handleChange}
            className="w-full p-2 bg-[#1c2230] border border-gray-600 rounded text-white"
            required
          >
            <option value="">Select Subject</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="Social Studies">Social Studies</option>
            <option value="Computer">Computer</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
