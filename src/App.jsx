import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Experience from "./sections/Experience";
function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Projects />
      <Skills />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
