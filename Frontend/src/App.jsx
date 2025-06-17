import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Summary from './pages/Summary';
import './index.css';
import Navbar from './navbar';

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Moved outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;
