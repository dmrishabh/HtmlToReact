import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
