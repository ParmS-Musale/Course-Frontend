import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UserCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch purchased courses
  const fetchPurchasedCourses = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming you have stored the token in localStorage

      const response = await axios.get("http://localhost:5020/users/purchase", {
        headers: {
          Authorization: `Bearer ${token}`, // Add the token to the request headers
        },
      });

      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to fetch purchased courses.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Fetch courses on component mount
  useEffect(() => {
    fetchPurchasedCourses();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Your Purchased Courses</h2>
      {loading ? (
        <p>Loading...</p>
      ) : courses.length > 0 ? (
        <ul>
          {courses.map((course) => (
            <li key={course.id} className="my-2">
              <h3 className="font-semibold">{course.name}</h3>
              <p>{course.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>You have no purchased courses.</p>
      )}
    </div>
  );
};

export default UserCourses;
