import React from "react";
import "../styles/about.css";
const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Our LMS</h2>

          <p>
            Our Learning Management System is designed to help students
            learn modern technologies through practical projects and
            industry-focused courses.
          </p>

          <p>
            Whether you're a beginner or an aspiring full-stack developer,
            our platform provides structured learning paths, hands-on
            exercises, and career-oriented content.
          </p>

          <div className="about-features">
            <div className="about-card">
              <h3>50+</h3>
              <p>Courses</p>
            </div>

            <div className="about-card">
              <h3>5000+</h3>
              <p>Students</p>
            </div>

            <div className="about-card">
              <h3>100+</h3>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;