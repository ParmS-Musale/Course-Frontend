import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AddCourse from "./pages/AddCourse";
import "bootstrap/dist/css/bootstrap.min.css";
import Courses from "./pages/Courses";
import { useEffect } from "react";
import AllUsers from "./pages/AllUsers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />

      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<AdminLogin/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-course" element={<AddCourse />} />
          <Route path="/all-course" element={<Courses />} />
          <Route path="/all-users" element={<AllUsers />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
