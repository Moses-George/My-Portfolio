import React, { useState, useEffect } from "react";
import "../../style/navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import Sidebar from "../../components/modals/Sidebar";
import logo from "../../assets/logo.svg";
import menuWhite from "../../assets/menu_light.svg";
import { MdDeveloperMode } from "react-icons/md";

// framer motion for animation
import { motion } from "framer-motion";

const Navbar = () => {

  const [openSidebar, setOpenSidebar] = useState(false);

  // code for setting dynamic document title
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.title = "Moses George-Frontend Developer";
    } else {
      let getLocation = String(location.pathname).slice(1);
      getLocation =
        getLocation.slice(0, 1).toUpperCase() + getLocation.slice(1);
      document.title = `Moses George - ${getLocation}`;
    }
  }, [location]);

  // code for hide and show navba ron scroll
  const [show, setShow] = useState(true);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);


  return (
    <>
      {openSidebar && <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1, ease: "easeOut" }}
        className={` 
        ${!show && "hide_navbar"}`}
        id="navbar"
      >
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <NavLink to="/home" className={`nav-link $({ isActive }) => (!isActive ? "unselected" : "active")}`}>
            Home
          </NavLink>
          <NavLink to="/about" className={`nav-link $({ isActive }) => (!isActive ? "unselected" : "active")}`}>
            About
          </NavLink>
          <NavLink to="/projects" className={`nav-link $({ isActive }) => (!isActive ? "unselected" : "active")}`}>
            projects
          </NavLink>
          <NavLink to="/contact" className={`nav-link $({ isActive }) => (!isActive ? "unselected" : "active")}`}>
            contact
          </NavLink>
        </div>

        {/* theme toggler */}
        <button
          className="theme_toggler"
        >
          <MdDeveloperMode style={{ fontSize: "25px" }} />
        </button>

        {/* responsive menu toggler button */}
        <button onClick={() => setOpenSidebar(true)} className="menu_toggler">
          <img
            src={menuWhite}
            alt="menu_toggler"
          />
        </button>

      </motion.nav>
    </>
  );
};

export default Navbar;
