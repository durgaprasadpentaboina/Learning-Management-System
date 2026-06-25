import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="hero">
      <div className="hero-content">

        <h1>Build Your Career with Modern Tech Skills</h1>

        <p>
          Learn React, Node.js, MongoDB, and Full Stack Development
          through structured lessons, real projects, and hands-on practice.
          Start your journey as a developer today.
        </p>

        <p>
          This LMS platform helps you learn step by step from basics to
          advanced concepts in a simple and practical way.
        </p>

        <button onClick={() => navigate("/login")}>
          Start Learning
        </button>

      </div>
    </section>
  );
};

export default Hero;