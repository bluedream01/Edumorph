import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Summary from './pages/Summary';
import Quizlanding from './pages/QuizPdfUploadPage';
import Quizgenerate from './pages/Quizgenerating';
import Notes from './pages/Notes';
import Profile from './pages/Profile';
import './index.css';
import Navbar from './navbar';
import Mindmap from './pages/FlowchartGenius';
import Loginpage from './pages/Components/Login';
import Signuppage from './pages/Components/Signup';

import PrivateRoute from './utils/PrivateRoute';
import RedirectIfLoggedIn from './utils/RedirectIfLoggedIn';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<PrivateRoute><Summary /></PrivateRoute>} />
        <Route path="/quizzes" element={<PrivateRoute><Quizlanding /></PrivateRoute>} />
        <Route path="/quizgenerating" element={<PrivateRoute><Quizgenerate /></PrivateRoute>} />
        <Route path="/Mindmap" element={<PrivateRoute><Mindmap /></PrivateRoute>} />
        <Route path="/notes" element={<PrivateRoute><Notes /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

        <Route path="/login" element={<RedirectIfLoggedIn><Loginpage /></RedirectIfLoggedIn>} />
        <Route path="/signup" element={<RedirectIfLoggedIn><Signuppage /></RedirectIfLoggedIn>} />
      </Routes>
    </Router>
  );
}

export default App;
