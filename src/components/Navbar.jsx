import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");
  
  return (
    <nav className="bg-white shadow-lg position-sticky top-0 z-index-1030">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/Home" className="flex items-center text-decoration-none">
          <img
            src="/src/assets/Logo.png"
            alt="Logo"
            className="w-12 h-12 mr-2 "
          />
          <span className="text-xl font-semibold text-gray-800  ">CourseHub</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 text-dec">
          <Link
            to="/home"
            className="text-gray-700 hover:text-blue-500 text-decoration-none"
          >
            Home
          </Link>

          <Link
            to="/courses"
            className="text-gray-700 hover:text-blue-600 transition duration-300 text-decoration-none"
          >
            Courses
          </Link>
          <Link
            to="/add-course"
            className="text-gray-700 hover:text-blue-600 transition duration-300 text-decoration-none"
          >
            Add Courses
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-blue-600 transition duration-30t text-decoration-none"
          >
            Dashboard
          </Link>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Login Button */}
       
       {token == null && <Link
          to="/login"
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300 text-decoration-none"
        >
          Login
        </Link> }
      {token != null && <Link
        onClick={() => {
          localStorage.removeItem("token");
        }}
          to="/login"
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition duration-300 text-decoration-none"
        >
          Logout
          
        </Link>}
      </div>
    </nav>
  );
}

export default Navbar;
