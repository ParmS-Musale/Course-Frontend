import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddCourse from './pages/AddCourse';
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './pages/Courses';
import { useEffect } from 'react';


function App() {
 

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/all-course" element={<Courses/>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
