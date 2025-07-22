import { useParams, Link } from "react-router-dom";
import { getCourseData } from "./data/courseData";
import { ArrowLeft } from "lucide-react";

const Subjects = () => {
  const { class: selectedClass, board: selectedBoard } = useParams();

  const courseData = getCourseData(selectedClass, selectedBoard);

  if (!courseData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-card-foreground mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The selected class and board combination is not available yet.
          </p>
          <Link to="/courses" className="text-primary hover:underline">
            Back to Course Selection
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
            to="/courses"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course Selection
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Class {selectedClass} {selectedBoard} Subjects
            
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose a subject to explore chapters and flashcards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courseData.subjects.map((subject, index) => (
            <Link
              key={subject.id}
              to={`/chapters/${selectedClass}/${selectedBoard}/${subject.id}`}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 rounded-lg bg-gradient-to-r ${subject.color} p-4 mb-6 group-hover:shadow-glow transition-all duration-300 mx-auto flex items-center justify-center`}
              >
                <span className="text-2xl">{subject.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground text-center">
                {subject.name}
              </h3>
              <p className="text-muted-foreground text-center text-sm">
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
