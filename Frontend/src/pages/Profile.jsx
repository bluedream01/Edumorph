import React, { useState, useRef } from 'react';
import './profile.css';
import Naoko from '../assets/girl1.jpg';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Naoko Watanabe',
    location: 'San Francisco, CA',
    email: 'naoko@example.com',
  });
  const [profileImg, setProfileImg] = useState(Naoko);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    // Save logic here (e.g., send to backend)
    setIsEditing(false);
  };

  const handleTabClick = (route) => {
    window.location.href = route;
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImg(imageUrl);
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
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="edit-input"
              placeholder="Name"
            />
            <input
              type="text"
              name="location"
              value={profileData.location}
              onChange={handleChange}
              className="edit-input"
              placeholder="Location"
            />
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="edit-input"
              placeholder="Email"
            />
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
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={handleEditToggle}>Cancel</button>
        </div>
      )}

      <div className="tabs">
        <div className="tab active" onClick={() => handleTabClick('/overview')}>Overview</div>
        <div className="tab" onClick={() => handleTabClick('/mindmaps')}>Mindmaps</div>
        <div className="tab" onClick={() => handleTabClick('/quizzes')}>Quizzes</div>
        <div className="tab" onClick={() => handleTabClick('/notes')}>Notes</div>
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
