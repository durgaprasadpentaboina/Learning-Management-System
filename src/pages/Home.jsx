import React from "react";

import Hero from "../components/Hero";
import About from "../components/About";
import FeaturedCourses from "../components/FeaturedCourses";
import Statistics from "../components/Statistics";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <FeaturedCourses />
      <Statistics />
      <CTA />

    </>
  );
};

export default Home;