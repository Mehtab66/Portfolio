import { useState } from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import WorkExperience from "./Components/WorkExperience";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <Navbar />
        <Header />
        <About />
        <WorkExperience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
