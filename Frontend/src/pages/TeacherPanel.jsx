import { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#38bdf8", "#f472b6", "#facc15", "#34d399", "#a78bfa"];

const TeacherPanel = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("/api/teacher/students", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setStudents(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching students:", err);
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  // Pie chart data: Class distribution
  const classDistribution = students.reduce((acc, student) => {
    const cls = student.onboarding?.class || "Unknown";
    acc[cls] = (acc[cls] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(classDistribution).map(([cls, count]) => ({
    name: `Class ${cls}`,
    value: count,
  }));

  // Total XP
  const totalXP = students.reduce((sum, s) => sum + (s.xp || 0), 0);

  return (
    <div className="p-8 text-white min-h-screen bg-[#0f172a]">
      <h1 className="text-4xl font-bold mb-8 border-b border-gray-700 pb-2">
        Teacher Dashboard
      </h1>

      {loading ? (
        <p className="text-gray-400">Loading students...</p>
      ) : (
        <>
          {/* Metrics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#1e293b] p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold mb-2">Total Students</h2>
              <p className="text-3xl">{students.length}</p>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold mb-2">Total XP</h2>
              <p className="text-3xl">{totalXP}</p>
            </div>
            <div className="bg-[#1e293b] p-6 rounded-2xl shadow-md">
              <h2 className="text-xl font-semibold mb-4">Class Distribution</h2>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    fill="#8884d8"
                    label
                  >
                    {pieData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Student Cards */}
          <h2 className="text-2xl font-semibold mb-4">Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {students.map((student) => (
              <div
                key={student._id}
                className="border border-gray-700 bg-[#1e293b] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">
                    {student.firstName} {student.lastName}
                  </h3>
                  <p className="text-sm text-gray-400">{student.email}</p>
                </div>

                <div className="text-sm space-y-1 mb-4">
                  <p>
                    <span className="text-gray-400">Class:</span>{" "}
                    {student.onboarding?.class || "N/A"}
                  </p>
                  <p>
                    <span className="text-gray-400">Board:</span>{" "}
                    {student.onboarding?.board || "N/A"}
                  </p>
                  <p>
                    <span className="text-gray-400">XP:</span> {student.xp}
                  </p>
                </div>

                {student.onboarding?.subjects?.length > 0 && (
                  <div>
                    <h4 className="text-md font-medium text-gray-300 mb-2">
                      Subjects & Levels
                    </h4>
                    <div className="bg-[#0f172a] rounded-md p-3 border border-gray-600 text-sm">
                      <ul className="space-y-1">
                        {student.onboarding.subjects.map((subject) => (
                          <li key={subject} className="flex justify-between">
                            <span>{subject}</span>
                            <span className="text-gray-400">
                              {student.onboarding.levels?.[subject] || "N/A"}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TeacherPanel;
