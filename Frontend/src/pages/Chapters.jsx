import { useParams, Link } from "react-router-dom";
import { getCourseData } from "./data/courseData";
import { ArrowLeft, BookOpen } from "lucide-react";

const Chapters = () => {
  const { class: selectedClass, board: selectedBoard, subjectId } = useParams();
  const courseData = getCourseData(selectedClass, selectedBoard);
  const subject = courseData?.subjects.find((s) => s.id === subjectId);

  if (!subject) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-card-foreground mb-4">
            Subject Not Found
          </h1>
          <p className="text-muted-foreground mb-6">
            The selected subject is not available.
          </p>
          <Link
            to={`/subjects/${selectedClass}/${selectedBoard}`}
            className="text-primary hover:underline"
          >
            Back to Subjects
          </Link>
        </div>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-background text-white">
    <div className="container mx-auto px-4 py-10">

      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-8 flex justify-start">
        <Link
          to={`/subjects/${selectedClass}/${selectedBoard}`}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white rounded-lg text-base font-medium shadow-md hover:bg-white/10 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Subjects
        </Link>
      </div>

      {/* Subject Header */}
      <div className="text-center mb-12">
        <div
          className={`w-20 h-20 rounded-xl bg-opacity-20 backdrop-blur-sm border border-white/20 ${subject.color} p-4 mb-6 mx-auto flex items-center justify-center shadow-inner shadow-white/10`}
        >
          <span className="text-3xl">{subject.icon}</span>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
          {subject.name} Chapters
        </h1>
        <p className="text-base text-gray-400">
          Class {selectedClass} · {selectedBoard} Board — Select a chapter to begin
        </p>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {subject.chapters.map((chapter, index) => {
          return (
            <Link
              key={chapter.id}
              to={`/chapter/${subjectId}/${chapter.id}`} // ✅ Route to AI video page
              className="group bg-white/8 border border-white/10 hover:border-blue-500 p-6 rounded-xl transition-all duration-300 cursor-pointer backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-blue-500/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-600 bg-opacity-20 p-3 mb-4 flex items-center justify-center group-hover:shadow-blue-500/50">
                <BookOpen className="w-6 h-6 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 truncate">
                {chapter.title}
              </h3>
              <p className="text-sm text-gray-400">10 flashcards available</p>
            </Link>
          );
        })}
      </div>
    </div>
  </div>
);

};

export default Chapters;
