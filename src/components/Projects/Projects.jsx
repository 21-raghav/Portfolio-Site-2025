import ext_link_logo from "../../assets/external-link.svg";

import "./Projects.css";

const PROJECTS = [
  {
    id: "p01",
    projectName: "Where in the World",
    projectSummary:
      "A responsive web application that pulls data from the REST Countries API and displays it in a splendid layout. The application searches and displays detailed information of any country.",
    projectLink: "https://where-in-the-world-mocha.vercel.app/",
    projectTechStack: ["React", "Router", "JavaScript", "CSS", "HTML"],
  },
  {
    id: "p02",
    projectName: "Github user search app",
    projectSummary:
      "Github user search app is a react application built to search for a github user by their username.",
    projectLink: "https://github-profile-search-c3x7843w1-raghavs-projects-0d802424.vercel.app/",
    projectTechStack: ["React", "JavaScript", "CSS", "HTML"],
  },
  {
    id: "p03",
    projectName: "Age calculator",
    projectSummary:
      "A simple web application where the user can check their age upon entering the valid date into input fields.",
    projectLink: "https://21-raghav.github.io/Age-Calculator-Web-App/",
    projectTechStack: ["JavaScript", "SCSS", "CSS", "HTML"],
  },
];

const Project = ({ projectLink, projectName, projectSummary, projectTechStack }) => {
  return (
    <div className="project-box">
      <a className="project-box__link" href={projectLink} target="_blank">
        <div className="project-title-box">
          <h3>{projectName}</h3>
          <img className="project-title-box__img" src={ext_link_logo} alt="link to external page"/>
        </div>
        <p>{projectSummary}</p>
        <ul className="project-box__list">
          {projectTechStack.map((item) => (
            <li className="project-box__list-item" key={item}>{item}</li>
          ))}
        </ul>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects-wrapper">
      {PROJECTS.map((item) => (
        <Project key={item.id} {...item} />
      ))}
    </section>
  );
};

export default Projects;
