import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="items-center">
      <nav className="bg-light">
        {/* Navbar links and search form */}
        <div className="lg:flex lg:items-center lg:justify-center lg:mt-4">
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0">
            <li className="nav-item">
              <Link
                to={'/home'}
                className="text-gray-700 hover:text-blue-500 text-decoration-none"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={'/link'}
                className="text-gray-700 hover:text-blue-500 text-decoration-none"
              >
                Link
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="text-gray-700 hover:text-blue-500 cursor-not-allowed text-decoration-none"
                href="#"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>

          {/* Login Button */}
          <Link
            to={"/login"}
            className="bg-green-500 text-white py-2 px-4 rounded-lg ml-2 text-decoration-none outline-none justify-end"
            type="submit"
          >
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
