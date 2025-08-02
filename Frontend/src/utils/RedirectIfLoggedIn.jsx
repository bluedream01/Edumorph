import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const RedirectIfLoggedIn = ({ children }) => {
  const token = localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(true);
  const [redirectPath, setRedirectPath] = useState(null);

  useEffect(() => {
    const checkUserStatus = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }

      try {
        const res = await axios.get('http://localhost:4000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user = res.data;

        // REDIRECT TO /student-details IF onboarding incomplete
        if (
          !user.onboarding ||
          !user.onboarding.class ||
          !user.onboarding.subjects ||
          user.onboarding.subjects.length === 0
        ) {
          setRedirectPath('/student-details');
        } else {
          setRedirectPath('/profile');
        }

      } catch (err) {
        console.error('Error fetching profile:', err);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserStatus();
  }, [token]);

  if (isLoading) return null; // show nothing or a loader while checking

  return redirectPath ? <Navigate to={redirectPath} replace /> : children;
};

export default RedirectIfLoggedIn;
