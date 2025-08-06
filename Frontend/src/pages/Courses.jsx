import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RedirectToSubjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await axios.get("/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const { class: userClass, board } = res.data;

        if (userClass && board) {
          navigate(`/subjects/${userClass}/${board}`);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  return null; // or a loading indicator
};

export default RedirectToSubjects;

