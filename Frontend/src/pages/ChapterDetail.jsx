import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, GamepadIcon, FileVideo } from "lucide-react";
import { Button } from "./components/ui/button";

// ✅ Import local videos
import forceVideo from "../assets/force-video.mp4";

// ✅ Chapter content data
const chapterContent = {
    "force-10-icse": {
        title: "Force and Laws of Motion",
        videoUrl: forceVideo,
        summary: (
            <>
                <p className="mb-4">
                    This chapter explains the fundamental principles that govern how objects move and interact
                    under the influence of forces. Newton’s three laws of motion are central to understanding
                    classical mechanics and the behavior of objects in various real-life situations.
                </p>
                <h3 className="font-semibold mb-2">Key Concepts:</h3>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li><strong>Force</strong>: A push or pull that changes or tends to change the state of motion of an object.</li>
                    <li><strong>SI Unit:</strong> Newton (N)</li>
                    <li><strong>Vector Quantity:</strong> Has both magnitude and direction</li>
                </ul>
                <h3 className="font-semibold mb-2">Balanced and Unbalanced Forces:</h3>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>Balanced forces do not change the state of motion.</li>
                    <li>Unbalanced forces cause acceleration or change in velocity.</li>
                </ul>
                <h3 className="font-semibold mb-2">Newton’s Laws of Motion:</h3>
                <ol className="list-decimal list-inside mb-4 space-y-2">
                    <li>
                        <strong>First Law (Law of Inertia)</strong>: An object remains at rest or in uniform motion unless acted upon by an external force.
                        <br />
                        <em>Inertia</em>: Tendency of a body to resist change in its state of motion.
                    </li>
                    <li>
                        <strong>Second Law</strong>: The rate of change of momentum is directly proportional to the applied force.
                        <br />
                        <strong>Formula</strong>: F = ma &nbsp;&nbsp; (Force = Mass × Acceleration)
                        <br />
                        <strong>Momentum</strong>: p = mv &nbsp;&nbsp; (Momentum = Mass × Velocity)
                        <br />
                        <strong>Impulse</strong>: Ft = Δp (Force × Time = Change in momentum)
                    </li>
                    <li>
                        <strong>Third Law</strong>: For every action, there is an equal and opposite reaction.
                        <br />
                        Action and reaction forces act on different bodies.
                    </li>
                </ol>
                <h3 className="font-semibold mb-2">Important Points:</h3>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>Heavier objects possess more inertia.</li>
                    <li>Sudden force causes more damage (e.g., hitting a wall vs. cotton).</li>
                    <li>Seat belts and airbags reduce force by increasing the time of impact (impulse).</li>
                    <li>Recoil of a gun is an example of Newton’s Third Law.</li>
                    <li>Walking involves action-reaction pair: pushing backward and moving forward.</li>
                    <li><strong>Law of Conservation of Momentum</strong>: In an isolated system, the total momentum before and after a collision remains the same.</li>
                </ul>
                <h3 className="font-semibold mb-2">Formula Recap:</h3>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>F = ma</li>
                    <li>p = mv</li>
                    <li>Impulse = Ft = Δp</li>
                    <li>a = (v - u)/t</li>
                </ul>
                <p>
                    This chapter builds a strong foundation for analyzing real-world physical phenomena like
                    motion, collisions, and mechanical interactions with logical and mathematical reasoning.
                </p>
            </>
        )
    },
    // Other dummy chapters
    "geometry-10-icse": {
        title: "Geometry",
        videoUrl: "https://example.com/geometry-video",
        summary:
            "Geometry covers fundamental geometric concepts including points, lines, angles, triangles, quadrilaterals, circles, and polygons. Learn how to measure shapes, calculate area and perimeter, and apply geometric rules in real-world problems.",
    },
    "mechanics-10-icse": {
        title: "Mechanics",
        videoUrl: "https://example.com/mechanics-video",
        summary:
            "Mechanics is the branch of physics that deals with motion and forces. This chapter explores Newton's laws of motion, concepts of velocity and acceleration, and how forces affect object movement.",
    },
    "atoms-10-icse": {
        title: "Atomic Structure",
        videoUrl: "https://example.com/atoms-video",
        summary:
            "Atomic structure explores the fundamental building blocks of matter. This chapter covers the discovery of atoms, subatomic particles (protons, neutrons, electrons), and how atoms form the basis of all materials.",
    },
};

const ChapterDetail = () => {
    const { subjectId, chapterId } = useParams();
    const chapter = chapterContent[chapterId];

    if (!subjectId || !chapterId || !chapter) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Chapter Not Found</h2>
                    <Link to="/subjects" className="text-primary hover:underline">
                        ← Back to Subjects
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                {/* ✅ Back to Chapters button */}
                <div className="mb-8 mx-auto">
                     <Link
                       to={`/chapters/10/ICSE/${subjectId}`}
                       className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white rounded-lg text-base font-medium shadow-md hover:bg-white/10 transition"
                     >
                       <ArrowLeft className="w-5 h-5" />
                       Back to Chapters
                     </Link>
                </div>


                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">{chapter.title}</h1>
                        <p className="text-lg text-muted-foreground">
                            Interactive learning with quizzes, games, and comprehensive content
                        </p>
                    </div>

                    {/* Quiz + Game buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Link to={`/test/10/ICSE/${subjectId}/${chapterId}`}>
                            <Button
                                size="lg"
                                className="w-full sm:w-auto px-8 py-6 text-lg bg-blue-500 text-white hover:bg-blue-600 transition-all"
                            >
                                <Play className="w-5 h-5 mr-2" />
                                Take Quiz
                            </Button>
                        </Link>
                        <Link to={`/match/10/ICSE/${subjectId}/${chapterId}`}>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto px-8 py-6 text-lg border border-blue-500 bg-transparent text-white hover:bg-blue-300 hover:text-white transition-all duration-300"
                            >
                                <GamepadIcon className="w-5 h-5 mr-2" />
                                Play Match Game
                            </Button>
                        </Link>
                        <Link to={`/game/10/ICSE/${subjectId}/${chapterId}`}>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto px-8 py-6 text-lg border border-blue-500 bg-transparent text-white hover:bg-blue-300 hover:text-white transition-all duration-300"
                            >
                                <GamepadIcon className="w-5 h-5 mr-2" />
                                Play Blast Game
                            </Button>
                        </Link>
                    </div>

                    {/* Video section */}
                    <div className="mb-12">
                        <div className="flex items-center mb-6">
                            <FileVideo className="w-6 h-6 mr-3 text-primary" />
                            <h2 className="text-2xl font-bold">AI Generated Video</h2>
                        </div>
                        <div className="relative bg-card rounded-xl border border-border overflow-hidden">
                            <div className="aspect-video bg-muted flex items-center justify-center">
                                {chapter.videoUrl.endsWith(".mp4") ? (
                                    <video controls className="w-full h-full object-contain rounded-md">
                                        <source src={chapter.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <div className="text-center p-8">
                                        <p className="text-lg font-medium text-muted-foreground mb-2">
                                            AI Generated Video Content
                                        </p>
                                        <p className="text-sm text-muted-foreground mb-4">
                                            Interactive video explaining {chapter.title} concepts
                                        </p>
                                        <Button className="mt-2" onClick={() => window.open(chapter.videoUrl, "_blank")}>
                                            <Play className="w-4 h-4 mr-2" />
                                            Play Video
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Chapter Summary and Show Questions button */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-6 text-white">Chapter Summary</h2>

                        <div className="rounded-xl border border-white/10 p-8 text-white/80 leading-relaxed text-lg backdrop-blur-md bg-white/5 shadow-lg">
                            {chapter.summary}
                        </div>

                        <div className="flex justify-center mt-6">
                            <Link to={`/flashcards/10/ICSE/${subjectId}/${chapterId}`}>
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto px-8 py-6 text-lg bg-blue-500 text-white hover:bg-blue-600 transition-all"
                                >
                                    Show Questions
                                </Button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ChapterDetail;
