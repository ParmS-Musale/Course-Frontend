import React from "react";

function CourseCard({ course }) {
  return (
    <div className="w-full sm:w-80 md:w-96 lg:w-1/4 p-4">
      <div className="card shadow-lg rounded-lg overflow-hidden">
      <img src={course.imageUrl} className="card-img-top w-full h-48 object-cover" alt={course.title} />
      <div className="card-body p-4">
          <h5 className="card-title font-bold text-lg mb-2">{course.title}</h5>
          <p className="card-text text-gray-700 mb-4">{course.description}</p>
          <p className="card-text text-gray-700 mb-4">Price : ₹ {course.price}</p>
          <p className="card-text text-gray-500 text-sm">
            <small>Last updated {course.updated} ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
