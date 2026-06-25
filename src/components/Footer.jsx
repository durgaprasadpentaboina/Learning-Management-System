import React from "react";
// import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>LMS</h2>
          <p>
            Learn modern technologies with structured courses,
            projects, and hands-on practice.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Login</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>support@lms.com</p>
          <p>+91 7675944130</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 LMS. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;