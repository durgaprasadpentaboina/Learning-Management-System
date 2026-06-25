import React, { useEffect, useState } from "react";
import "../styles/courses.css";

const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses([
      { id: 1, title: "React Basics", progress: 70 },
      { id: 2, title: "Node.js", progress: 40 },
    ]);
  }, []);

  return (
    <div className="courses">
      <h2>My Enrolled Courses</h2>

      <div className="course-grid">
        {courses.map((c) => (
          <div className="course-card" key={c.id}>
            <h3>{c.title}</h3>
            <p>Progress: {c.progress}%</p>

            <div className="progress-bar">
              <div style={{ width: `${c.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;