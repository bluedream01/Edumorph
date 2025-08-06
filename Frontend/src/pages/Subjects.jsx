import { useParams, Link } from "react-router-dom";
import { getCourseData } from "./data/courseData";
import { ArrowLeft } from "lucide-react";

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
      <div className="absolute inset-0 bg-blue/30 backdrop-blur-sm shadow-inner shadow-blue/40 z-0" />
      <div className="container mx-auto px-6 py-12 relative z-10">
        
        {/* Back Button */}
        <div className="mb-8">
  <Link
    to="/"
    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-full shadow hover:bg-gray-600 transition duration-200"
  >
    <ArrowLeft className="w-4 h-4" />
    <span className="font-medium">Back to Home</span>
  </Link>
</div>


        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white drop-shadow-md">
            Class {selectedClass} — {selectedBoard}
          </h1>
          <p className="text-lg text-gray-400">
            Choose a subject to explore chapters, flashcards & XP rewards
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl min-h-[65vh] mx-auto">
          {courseData.subjects.map((subject, index) => (
            <Link
              key={subject.id}
              to={`/chapters/${selectedClass}/${selectedBoard}/${subject.id}`}
              className="group rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-blue-500/30 hover:border-blue-500/40 transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 mb-6 rounded-xl flex items-center justify-center ${subject.color} bg-opacity-30 mx-auto text-3xl group-hover:scale-110 transition-transform duration-300`}
              >
                {subject.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-white mb-2">
                {subject.name}
              </h3>
              <p className="text-sm text-center text-gray-300">
                {subject.chapters.length} chapters available
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subjects;
