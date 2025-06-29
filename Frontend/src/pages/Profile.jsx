import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import DefaultProfile from '../assets/girl1.jpg';

export default function Profile() {
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [profileImg, setProfileImg] = useState(DefaultProfile);
  const [originalData, setOriginalData] = useState({ name: '', email: '' });

  const [profileData, setProfileData] = useState({
    name: '',
    location: 'Not Provided',
    email: '',
  });

useEffect(() => {
  const fetchProfile = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const res = await fetch('http://localhost:4000/api/auth/profile', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!res.ok) throw new Error('Failed to fetch profile');
      const data = await res.json();

      const profile = {
        name: data.username || 'Guest',
        email: data.email || 'Not Available',
        location: 'Not Provided'
      };

      setProfileData(profile);
      setOriginalData({ name: profile.name, email: profile.email });
    } catch (err) {
      console.error('❌ Error fetching user data:', err.message);
    }
  };

  fetchProfile();
}, []);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => setIsEditing(prev => !prev);

  const handleSave = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await fetch("http://localhost:4000/api/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          username: profileData.name,
          email: profileData.email
        })
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
    setProfileData(prev => ({
      ...prev,
      name: originalData.name,
      email: originalData.email
    }));
    setIsEditing(false);
  };

  const handleTabClick = (route) => {
    window.location.href = route;
  };

  const handleImageClick = () => fileInputRef.current.click();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImg(imageUrl); // for instant preview

      // Upload to backend
      try {
        const response = await fetch("http://localhost:4000/api/auth/profile-image", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ imageUrl }), // In real app, use cloud upload
        });
        const data = await response.json();
        localStorage.setItem("profileImage", data.profileImage);
      } catch (error) {
        console.error("Error updating profile image:", error);
      }
    }
  };


  return (
    <div className="container">
      <div className="profile-header">
        <div className="profile-img-wrapper" onClick={handleImageClick}>
          <img src={profileImg} alt="Profile" className="profile-img" />
          <div className="img-hover-overlay">Edit Photo</div>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />

        {isEditing ? (
          <div className="edit-fields">
            <input type="text" name="name" value={profileData.name} onChange={handleChange} className="edit-input" />
            <input type="text" name="location" value={profileData.location} onChange={handleChange} className="edit-input" />
            <input type="email" name="email" value={profileData.email} onChange={handleChange} className="edit-input" />
          </div>
        ) : (
          <>
            <h2>{profileData.name}</h2>
            <p>
              {profileData.location}<br />
              Email: {profileData.email}<br />
              Joined in 2024
            </p>
          </>
        )}
      </div>

      {!isEditing ? (
        <button className="edit" onClick={handleEditToggle}>
          <img src="https://www.svgrepo.com/show/355801/edit.svg" alt="edit" />
          Edit
        </button>
      ) : (
        <div className="button-group">
          <button type="button" className="save-btn" onClick={handleSave}>Save</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      )}

      <div className="tabs">
        <Link to="/overview" className="tab active">Overview</Link>
        <Link to="/mindmaps" className="tab">Mindmaps</Link>
        <Link to="/quizzes" className="tab">Quizzes</Link>
        <Link to="/notes" className="tab">Notes</Link>
      </div>

      <h3 className="attempt">Attempted Quizzes</h3>
      <table className="quiz-table">
        <thead>
          <tr>
            <th>Quiz Title</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>History of Science</td>
            <td>85%</td>
            <td><button className="status-btn completed">Completed</button></td>
          </tr>
          <tr>
            <td>Introduction to Psychology</td>
            <td>70%</td>
            <td><button className="status-btn completed">Completed</button></td>
          </tr>
          <tr>
            <td>Advanced Mathematics</td>
            <td>In Progress</td>
            <td><button className="status-btn in-progress">In Progress</button></td>
          </tr>
        </tbody>
      </table>

      <div className="notes-shared">
        <h3>Notes Shared</h3>
        <span className="notes">Theories of Relativity</span>
        <span className="note-tag">Cognitive Behavioral Therapy</span>
        <span className="note-tag">Calculus Fundamentals</span>
      </div>

      <h3 className="mindmap">Mindmaps</h3>
      <div className="mind">
        <img src="https://a.storyblok.com/f/289344/3068x1988/b86b6a858a/summaries-mind-map.png" alt="Mindmap 1" />
        <img src="https://lh5.googleusercontent.com/PlYQp14FPN15YWl0jOem_clWd3uQlhsBK8g2rwrtcogqzNrghO-RowH2yaMjxTFfIcdwKDoCiJwiuLKDn0lHXZUayi30CSJvKAa8AG_LhzLqVTlF007W7kbhwu7hPc--UO-7FiOR" alt="Mindmap 2" />
        <img src="https://www.designorate.com/wp-content/uploads/2015/07/imindmap.jpg" alt="Mindmap 3" />
      </div>
    </div>
  );
}
