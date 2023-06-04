import { useContext } from "react";
import Heading from "../components/Heading";
import "../index.css";
import "../style/project.css";
import Projectcard from "../components/projects/Projectcard";
import projectContents from "../components/projects/projectContents";

const Projects = () => {


  return (
    <>
      <main className="projects">
        <Heading
          heading="Home / Projects"
          description="A selection of my favorite works."
        />
        <section className="project_container">
          {projectContents.map(project =>
            <Projectcard
            key={project.id}
              projectImage= {project.Image}
              projectTitle= {project.title}
              projectDescription= {project.description}
              liveLinkUrl= {project.liveUrl}
              githubLink={project.repositoryUrl}
            />)}
        </section>
      </main>
    </>
  );
};

export default Projects;
