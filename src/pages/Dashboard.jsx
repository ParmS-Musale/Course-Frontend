import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate()
  useEffect(()=>{

    const token = localStorage.getItem("token");
    if(!token){
      navigate("/login")
    }

  },[])

  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`bg-slate-900 text-white w-64 p-4 ${isSidebarOpen ? 'block' : 'hidden'} lg:block`}
      >
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <ul className="mt-6">
          <li>
            <Link to="/" className="block py-2 px-4 text-white rounded text-decoration-none">
              Home
            </Link>
          </li>
          <li>
            <Link to="/all-course" className="block py-2 px-4 text-white rounded text-decoration-none">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/all-users" className="block py-2 px-4 text-white rounded text-decoration-none">
              Users
            </Link>
          </li>
          {/* More links */}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-700">Dashboard Overview</h1>
          {/* Responsive Sidebar Toggle */}
          <button
            className="lg:hidden text-white bg-blue-500 p-2 rounded"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            Toggle Sidebar
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {/* Example Metric Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">Total Users</p>
              <p className="text-2xl font-bold">1,200</p>
            </div>
            <div className="bg-blue-200 p-4 rounded-full">
              <i className="fas fa-users text-xl text-blue-800"></i>
            </div>
          </div>

          {/* Add more metrics here */}
        </div>

        {/* Graph Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Monthly User Growth</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {/* Example of a chart placeholder */}
            <div className="h-64 bg-gray-200 flex justify-center items-center">
              <span className="text-gray-500">Chart Placeholder</span>
            </div>
          </div>
        </div>

        {/* Other Sections */}
        {/* Example of a recent activity list */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Recent Activity</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <ul>
              <li className="py-2 border-b">
                <p className="font-semibold">User A signed up</p>
                <p className="text-sm text-gray-500">2 minutes ago</p>
              </li>
              {/* More activities */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
