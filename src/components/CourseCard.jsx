import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CourseCard({ course }) {
  const navigate = useNavigate();

  // Check if user is authenticated on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // Handle course purchase button click
  const handleBuyCourse = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // Add logic to handle the course purchase (e.g., API call)
      toast.success(`Successfully purchased ${course.title}!`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full sm:w-80 md:w-96 lg:w-1/4 p-3">
      <div className="card shadow-lg rounded-lg overflow-hidden">
        <img
          src={course.imageUrl}
          className="card-img-top w-full h-48 object-cover"
          alt={course.title}
        />
        <div className="card-body p-3">
          <h5 className="card-title font-bold text-lg mb-2">{course.title}</h5>
          <p className="card-text text-gray-700 mb-4">{course.description}</p>
          <p className="card-text text-gray-700 mb-4">
            Price : ₹ {course.price}
          </p>
          <div className="card-text text-gray-500 text-sm">
            <button
              type="button"
              className="btn btn-success mr-2"
              onClick={handleBuyCourse}
            >
              Buy Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
