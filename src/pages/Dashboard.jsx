import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AllUsers from "./AllUsers";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // Check if the user is logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // Fetch all users from the backend
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5020/admin/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsers(response.data); // Assume response.data is an array of users
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-slate-900 text-white w-64 p-4 ${
          isSidebarOpen ? "block" : "hidden"
        } lg:block`}
      >
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <ul className="mt-6">
          
          <li>
            <Link
              to="/"
              className="block py-2 px-4 text-white rounded text-decoration-none"
            >
              Home
            </Link>
          </li>
          {/* <li>
            <Link
              to="/all-course"
              className="block py-2 px-4 text-white rounded text-decoration-none"
            >
              Courses
            </Link>
          </li> */}
          
          <li>
            <Link
              to="/all-users"
              className="block py-2 px-4 text-white rounded text-decoration-none"
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/user-course"
              className="block py-2 px-4 text-white rounded text-decoration-none"
            >
               Purchased Course
            </Link>
          </li>
          
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-700">
            Dashboard Overview
          </h1>
        </div> */}

        <div>
          <AllUsers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
