import React from "react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";
import "../style/about.css";
import { motion } from "framer-motion";
import { frontendSkills, devSkills } from "../components/About/skills";

const About = () => {

  return (
    <>
      <motion.main
        animate={{ scale: 1, opacity: 1, y: 0 }}
        initial={{ scale: 0, opacity: 0, y: 300 }}
        transition={{ duration: 1 }}
        className="about"
      >
        <Heading heading="about me" description="PROFESSIONAL SUMMARY" />
        <div className="description">
          <p className="about_me_descrition">
            Front-End Developer with a passion for web development and success in managing development projects.
            Skilled in conceptualizing, designing, developing, and deploying software containing logical and mathematical solutions to business problems.
            Dedicated to driving innovation with the ability to follow industry and technological trends, and facilitating early adoption of innovations.
            Capable of continuous learning from senior developers while being mentored. Eager to tackle problems and continue to find ways to maximize user efficiency.
          </p>

          <ul className="about_me_list">
            <li>
              🌱 I’m currently learning NextJs, TailwindCss and TypeScript.
            </li>
            <li>
              💻 All of my projects are available at{" "}
              <Link to="/projects">my Projects</Link>
            </li>
            <li>
              📫 How to reach me{" "}
              <a href="mailto:mosesgeorge323287@gmail.com">mosesgeorge323287@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* education and work section  */}
        <div className="education_and_experience">
          <h3 className="education_section_title">
            Education and Experience
          </h3>
          <p className="edu_description">
            Here's a brief rundown of my most recent activities.
          </p>

          <div className="journey_graph">
            <div className="graph">
              <p className="title-1">
                Bachelor Degree in Civil Engineering
              </p>
              <p className="title-2">
                University of Benin, Benin City.
              </p>
              <p className="title-4">Aug 2020 - Till Date</p>
            </div>

            <div className="graph">
              <p className="title-1">Udemy .  Angela Yu</p>
              <p className="title-3">Nov 2021 - May 2022</p>
              <p className="desc">
                2020 Web Development Bootcamp (Frontend and basics of node and npm)
              </p>
            </div>

            <div className="graph">
              <p className="title-1">Udemy . Maxmillian Schwarzmuller</p>
              <p className="title-3">May 2022 - Aug 2022</p>
              <p className="desc">
                React - The Complete Guide
              </p>
            </div>

            <div className="graph">
              <p className="title-1">Certification at Sololearn</p>
              <p className="title-2">Theoretical and practical application of Javascript</p>
              <p className="title-3">Aug 2022</p>
            </div>
          </div>
        </div>

        {/* skill section */}
        <div className="skill">
          <h4 className="skill_heading">Skills</h4>

          <section className="skill_flex-box">
            <div className="frontend_skill skill_type_box">
              <h2 className="skill_heading">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt=""
                  width="40px"
                  height="40px"
                />
                FRONT-END
              </h2>

              {frontendSkills.map(skill =>
                <div className="skill_data" key={skill.id} >
                  <p className="skill_name">{skill.name}</p>
                  <div className="progress">
                    <div
                      className="progress-value"
                      style={{
                        width: skill.progress,
                        background: skill.background,
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>


            <div className="frontend_skill skill_type_box">
              <h2 className="skill_heading">
                Dev
              </h2>

              {devSkills.map(skill =>
                <div className="skill_data" key={skill.id} >
                  <p className="skill_name">{skill.name}</p>
                  <div className="progress">
                    <div
                      className="progress-value"
                      style={{
                        width: skill.progress,
                        background: skill.background,
                      }}
                    ></div>
                  </div>
                </div>
              )}

            </div>
          </section>
        </div>
      </motion.main>
    </>
  );
};

export default About;
