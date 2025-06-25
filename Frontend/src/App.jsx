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



function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Moved outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/quizzes" element={<Quizlanding />} />
        <Route path="/quizgenerating" element={<Quizgenerate />} />
        <Route path="/Mindmap" element={<Mindmap />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/profile" element={<Profile />} />
         <Route path="/login" element={<Loginpage/>} />
         <Route path="/signup" element={<Signuppage/>}/>
      </Routes>
    </Router>
  );
}

export default App;