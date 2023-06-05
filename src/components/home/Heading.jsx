import React from "react";
import devImage from "../../assets/profile_pic.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Resume from "../../assets/resume/Resume.pdf";


const Heading = ({ theme }) => {

  return (
    <main>
      <div className="heading">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
          className="heading_text"
        >
          Hi! I'm <span>George Moses</span>, a Front-End Developer
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeIn" }}
          className="devloper_img"
        >
          <LazyLoadImage alt="moses george" effect="blur" src={devImage} />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: "easeIn" }}
        className="btn_group"
      >
        <Link to={Resume} target="_blank" className="blog_link" download="Resume">
          Download Resume <FaDownload style={{marginLeft:".5rem"}} />
        </Link>
        <Link to="/about" className="about_link">
          More about me <FaArrowRight style={{marginLeft:".5rem"}} />
        </Link>
      </motion.div>

      <motion.h1
        className="heading_end"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeIn" }}
      >
        ∿∿∿
      </motion.h1>
    </main>
  );
};

export default Heading;
