import React from "react";

function CourseCard() {
  return (
    <div className="w-full sm:w-80 md:w-96 lg:w-1/4 p-4">
      <div className="card shadow-lg rounded-lg">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
