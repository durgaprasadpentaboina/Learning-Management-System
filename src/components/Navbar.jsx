import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);

    const goAndScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(goAndScroll, 300);
    } else {
      goAndScroll();
    }
  };

  return (
    <header className={`nav-container ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav">

        <div className="logo" onClick={() => scrollToSection("hero")}>
          LMS
        </div>

        <div
          className={`menu-btn ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`menu ${open ? "show" : ""}`}>
          <li>
            <button onClick={() => scrollToSection("hero")}>HOME</button>
          </li>

          <li>
            <button onClick={() => scrollToSection("about")}>ABOUT</button>
          </li>

          <li>
            <button onClick={() => scrollToSection("popular-courses")}>
              COURSES
            </button>
          </li>

          <li>
            <Link to="/login" onClick={() => setOpen(false)}>
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;