import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

// for animation
import { AnimatePresence } from "framer-motion";


import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";


function App() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <AnimatePresence>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route
            path="/about"
            exact
            element={<About />} />
          <Route
            path="/projects"
            exact
            element={<Projects />} />
          <Route
            path="/contact"
            exact
            element={<Contact />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}

export default App;
