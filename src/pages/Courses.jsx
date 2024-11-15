import React from "react";
import CourseList from "./CourseList";

const Courses = () => {
  return (
    <>
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold">
          All Courses 📚
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        <CourseList />
      </div>
    </>
  );
};

export default Courses;
