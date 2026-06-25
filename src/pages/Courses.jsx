import React, { useEffect, useState } from "react";

import "../styles/courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses([
      {
        _id: "1",
        title: "React.js Mastery",
        description: "Learn React from basics to advanced projects",
      },
      {
        _id: "2",
        title: "Node.js Backend",
        description: "Build scalable backend APIs using Node & Express",
      },
      {
        _id: "3",
        title: "MongoDB Database",
        description: "Master NoSQL database design and queries",
      },
      {
        _id: "4",
        title: "Full Stack MERN",
        description: "Complete full stack development course",
      },
    ]);
  }, []);

  return (
    <div className="courses">
      <h2>Available Courses</h2>

      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;