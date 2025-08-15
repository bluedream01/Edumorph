import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Summary from './pages/Summary';
import Quizlanding from './pages/QuizPdfUploadPage';
import Quizgenerate from './pages/Quizgenerating';
import Notes from './pages/Notes';
import Courses from './pages/Courses';
import Chapters from './pages/Chapters';
import Subjects from './pages/Subjects';
import Flashcards from "./pages/Flashcards";
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';
import Mindmap from './pages/FlowchartGenius';
import Loginpage from './pages/Components/Login';
import Signuppage from './pages/Components/Signup';
import StudentForm from './pages/Components/StudentDetailsForm';
import Chatbot from './pages/Components/Chatbot';
import TestPage from './pages/TestPage';
import './index.css';
import TeacherPanel from './pages/TeacherPanel';
import Navbar from './navbar';
import FlashcardMatchGame from "./pages/FlashcardMatchGame";
import Congratulations from "./pages/Congratulations";
import ChapterDetail from "./pages/ChapterDetail";

import PrivateRoute from './utils/PrivateRoute';
import RedirectIfLoggedIn from './utils/RedirectIfLoggedIn';
import OnboardingRoute from './utils/OnboardingRoute';
import TestSubjects from "./pages/TestSubjects";
import TestChapters from "./pages/TestChapters";
import TestMarks from "./pages/TestMarks";
import TestStart from "./pages/TestStart";
import TestResults from "./pages/TestResults";
import AITest from './pages/AITest';
import Game from './pages/Gaming';

function App() {
  return (
    <Router>
      <Navbar />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Auth routes */}
        <Route path="/login" element={<RedirectIfLoggedIn><Loginpage /></RedirectIfLoggedIn>} />
        <Route path="/signup" element={<RedirectIfLoggedIn><Signuppage /></RedirectIfLoggedIn>} />
        <Route path="/student-details" element={<PrivateRoute><StudentForm /></PrivateRoute>} />

        {/* Main feature routes */}
        <Route path="/summary" element={<PrivateRoute><Summary /></PrivateRoute>} />
        <Route path="/quizzes" element={<PrivateRoute><Quizlanding /></PrivateRoute>} />
        <Route path="/quizgenerating" element={<PrivateRoute><Quizgenerate /></PrivateRoute>} />
        <Route path="/mindmap" element={<PrivateRoute><Mindmap /></PrivateRoute>} />
        <Route path="/notes" element={<PrivateRoute><Notes /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/onboarding" element={<PrivateRoute><Onboarding /></PrivateRoute>} />
        <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
        <Route path="/teacher" element={<PrivateRoute><TeacherPanel /></PrivateRoute>} />
        <Route path="/game" element={<PrivateRoute><Game /></PrivateRoute>} />

        {/* Subject & Chapter routes */}
        <Route path="/subjects/:class/:board" element={<PrivateRoute><Subjects /></PrivateRoute>} />
        <Route path="/chapters/:class/:board/:subjectId" element={<PrivateRoute><Chapters /></PrivateRoute>} />
        <Route path="/flashcards/:class/:board/:subjectId/:chapterId" element={<PrivateRoute><Flashcards /></PrivateRoute>} />
        <Route path="/test/:class/:board/:subjectId/:chapterId" element={<PrivateRoute><TestPage /></PrivateRoute>} />
        <Route path="/match/:class/:board/:subjectId/:chapterId" element={<PrivateRoute><FlashcardMatchGame /></PrivateRoute>} />

        {/* Chapter detail */}
        <Route path="/chapter/:subjectId/:chapterId" element={<PrivateRoute><ChapterDetail /></PrivateRoute>} />

        {/* Optional fallback */}
        <Route path="/subjects" element={
          <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h2>Missing Class/Board Params</h2>
            <p>Please select a valid class and board.</p>
          </div>
        } />

        <Route path="/congratulations" element={<Congratulations />} />
        <Route path="/aitest" element={<PrivateRoute><AITest /></PrivateRoute>} />
        <Route path="/aitest/subjects" element={<TestSubjects />} /> {/* ✅ Moved inside Routes */}
        <Route path="/aitest/chapters" element={<TestChapters />} />
        <Route path="/aitest/marks" element={<TestMarks />} />
        <Route path="/aitest/start" element={<TestStart />} />
        <Route path="/aitest/results" element={<TestResults />} />
      </Routes>
    </Router>
  );
}

export default App;
