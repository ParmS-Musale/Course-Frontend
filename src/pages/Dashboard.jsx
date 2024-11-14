import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="dashboard">
      <h2>Welcome to the Dashboard</h2>
      <Link to="/add-course">Add New Course</Link>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
