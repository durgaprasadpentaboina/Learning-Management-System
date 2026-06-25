import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="cta" id="cta">
      <div className="cta-content">
        <h2>Ready To Start Learning?</h2>

        <p>
          Join thousands of students and upgrade your skills.
        </p>

        <button onClick={() => navigate("/register")}>
          Create Free Account
        </button>
      </div>
    </section>
  );
};

export default CTA;