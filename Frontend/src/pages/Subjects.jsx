import { useParams, Link } from "react-router-dom";
import { getCourseData } from "./data/courseData";
import { ArrowLeft } from "lucide-react";
import { PiMathOperationsBold } from "react-icons/pi";
import { GiMaterialsScience } from "react-icons/gi";
import { FaFlask, FaDna, FaHistory, FaGlobeAsia } from "react-icons/fa";

const iconMap = {
  Mathematics: {
    icon: <PiMathOperationsBold className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-400",
  },
  Physics: {
    icon: <GiMaterialsScience className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-400",
  },
  Chemistry: {
    icon: <FaFlask className="w-8 h-8" />,
    color: "from-pink-500 to-red-400",
  },
  Biology: {
    icon: <FaDna className="w-8 h-8" />,
    color: "from-purple-500 to-pink-400",
  },
  History: {
    icon: <FaHistory className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-400",
  },
  Geography: {
    icon: <FaGlobeAsia className="w-8 h-8" />,
    color: "from-teal-500 to-green-400",
  },
};

const Subjects = () => {
  const { class: selectedClass, board: selectedBoard } = useParams();
  const courseData = getCourseData(selectedClass, selectedBoard);

  if (!courseData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="text-gray-400 mb-6">
            The selected class and board combination is not available yet.
          </p>
          <Link
            to="/"
            className="text-blue-400 hover:underline hover:text-blue-500"
          >
            Back to Course Selection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white relative bg-background">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-blue/10 backdrop-blur-sm z-0" />

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight drop-shadow-md">
            Class {selectedClass}   {selectedBoard}
          </h1>
          <p className="text-lg text-gray-300">
            Choose a subject to explore chapters, flashcards & XP rewards
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courseData.subjects.map((subject, index) => {
            const subjectIcon = iconMap[subject.name];
            return (
              <Link
                key={subject.id}
                to={`/chapters/${selectedClass}/${selectedBoard}/${subject.id}`}
                className="group relative rounded-2xl p-5 h-55 border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon Badge */}
                <div
                  className={`w-15 h-15 mb-6 mt-4 rounded-full bg-gradient-to-br ${subjectIcon.color} flex items-center justify-center text-white text-3xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {subjectIcon.icon}
                </div>

                {/* Subject Name */}
                <h3 className="text-2xl font-semibold text-center mb-2">
                  {subject.name}
                </h3>

                {/* Chapter Count */}
                <p className="text-sm text-center text-gray-300">
                  {subject.chapters.length} chapters available
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
