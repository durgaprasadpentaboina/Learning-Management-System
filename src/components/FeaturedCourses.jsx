import React from "react";

const FeaturedCourses = () => {
  const courses = [
    "React.js Mastery",
    "Node.js Backend",
    "MongoDB Essentials",
    "Full Stack MERN",
    "Python for Beginners",
    "Java + Spring Boot"
  ];

  return (
    <section id="popular-courses" className="featured-courses">
      <h2>Popular Courses</h2>

      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <h3>{course}</h3>

            <p>
              Learn through projects and real-world examples.
            </p>

            <button>Login To Enroll</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCourses;