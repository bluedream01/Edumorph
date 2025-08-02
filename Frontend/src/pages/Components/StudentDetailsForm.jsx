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

  // ✅ Redirect to login if no token
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
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');
    if (!token || token === 'undefined') {
      alert('Unauthorized. Missing or invalid token.');
      return;
    }

    // Prepare API body payload
    const payload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phoneNumber,
      onboarding: {
        class: formData.onboarding.class,
        board: formData.onboarding.board,
        subjects: formData.onboarding.subjects,
      },
    };

    console.log('Submitting data:', payload);

    try {
      const response = await fetch('http://localhost:4000/api/contact-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message || 'Details saved successfully!');
        console.log('Success:', result);
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
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#1e293b] p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          Complete Your Profile
        </h2>

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
            placeholder="Class"
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
            placeholder="Phone Number"
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
            <option value="IB">IB</option>
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
