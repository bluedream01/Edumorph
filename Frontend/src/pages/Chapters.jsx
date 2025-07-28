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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            to={`/subjects/${selectedClass}/${selectedBoard}`}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Subjects
          </Link>
        </div>

        <div className="text-center mb-12">
          <div
            className={`w-20 h-20 rounded-lg bg-gradient-to-r ${subject.color} p-4 mb-6 mx-auto flex items-center justify-center shadow-glow`}
          >
            <span className="text-3xl">{subject.icon}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{subject.name} Chapters</h1>
          <p className="text-lg text-muted-foreground">
            Class {selectedClass} {selectedBoard} • Choose a chapter to start
            learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {subject.chapters.map((chapter, index) => (
            <Link
              key={chapter.id}
              to={`/flashcards/${selectedClass}/${selectedBoard}/${subjectId}/${chapter.id}`}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-primary p-3 mb-4 group-hover:shadow-glow transition-all duration-300">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-card-foreground">
                {chapter.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {Object.values(chapter.flashcards).reduce(
                  (sum, level) => sum + level.length,
                  0
                )}{" "}
                flashcards available
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chapters;
