import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const OnboardingRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setShouldRedirect(true);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:4000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user = response.data;

        if (!user.onboarding || !user.onboarding.class || !user.onboarding.subjects?.length) {
          setShouldRedirect(true); // ❗User not onboarded
        } else {
          setShouldRedirect(false); // ✅ User onboarded
        }

      } catch (err) {
        console.error('Failed to fetch user profile:', err);
        setShouldRedirect(true);
      }

      setLoading(false);
    };

    checkOnboardingStatus();
  }, []);

  if (loading) return <p>Loading...</p>;

  return shouldRedirect ? <Navigate to="/student-details" /> : children;
};

export default OnboardingRoute;
