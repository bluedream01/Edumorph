import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Summary from './pages/Summary';
import Quizlanding from './pages/QuizPdfUploadPage';
import Quizgenerate from './pages/Quizgenerating';
import Notes from './pages/Notes';
import Courses from './pages/Courses'; // Capitalized 'Courses'
import Chapters from './pages/Chapters';
import Subjects from './pages/Subjects';
import Flashcards from "./pages/Flashcards";
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';
import Mindmap from './pages/FlowchartGenius';
import Loginpage from './pages/Components/Login';
import Signuppage from './pages/Components/Signup';
import Chatbot from './pages/Components/Chatbot';

import './index.css';
import Navbar from './navbar';

import PrivateRoute from './utils/PrivateRoute';
import RedirectIfLoggedIn from './utils/RedirectIfLoggedIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<PrivateRoute><Summary /></PrivateRoute>} />
        <Route path="/quizzes" element={<PrivateRoute><Quizlanding /></PrivateRoute>} />
        <Route path="/quizgenerating" element={<PrivateRoute><Quizgenerate /></PrivateRoute>} />
        <Route path="/mindmap" element={<PrivateRoute><Mindmap /></PrivateRoute>} />
        <Route path="/notes" element={<PrivateRoute><Notes /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/onboarding" element={<PrivateRoute><Onboarding /></PrivateRoute>} />
        <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
        <Route path="/subjects/:class/:board" element={<PrivateRoute><Subjects /></PrivateRoute>} />
        <Route path="/chapters/:class/:board/:subjectId" element={<PrivateRoute><Chapters /></PrivateRoute>} />
         <Route path="/flashcards/:class/:board/:subjectId/:chapterId" element={<PrivateRoute><Flashcards /></PrivateRoute>} />
        <Route path="/login" element={<RedirectIfLoggedIn><Loginpage /></RedirectIfLoggedIn>} />
        <Route path="/signup" element={<RedirectIfLoggedIn><Signuppage /></RedirectIfLoggedIn>} />
      </Routes>
    </Router>
  );
}

export default App;
