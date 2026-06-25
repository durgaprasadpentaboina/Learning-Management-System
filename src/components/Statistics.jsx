import React from "react";

const Statistics = () => {
  return (
    <section className="stats">
      <h2>Learning Statistics</h2>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>5000+</h3>
          <p>Students</p>
        </div>

        <div className="stat-card">
          <h3>50+</h3>
          <p>Courses</p>
        </div>

        <div className="stat-card">
          <h3>100+</h3>
          <p>Projects</p>
        </div>

        <div className="stat-card">
          <h3>95%</h3>
          <p>Success Rate</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;