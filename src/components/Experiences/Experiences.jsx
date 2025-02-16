import calendarLogo from "../../assets/calendar.svg";

import "./Experiences.css";

const EXPERIENCES = [
  {
    id: "e01",
    duration: "Nov 2024 - Jan 2025",
    designation: "Freelance Frontend Developer",
    projectName: "Advocate Site",
    projectLink: "https://lawyer-page-drab.vercel.app/",
    summary:
      "Developed and maintained a responsive website for a lawyer, ensuring high-quality user experiences. Collaborated with the client to deliver customized solutions using HTML, CSS, JavaScript, and React. Managed the project timeline, delivered within the deadline, and provided ongoing support and updates.",
    techStack: ["React", "React-Router", "JavaScript", "CSS", "HTML"],
  },
  {
    id: "e02",
    duration: "Feb 2024 - May 2024",
    designation: "Freelance Frontend Developer",
    projectName: "Artist Portfolio",
    projectLink: "https://rutuparnadas.vercel.app/home",
    summary:
      "Developed a Single Page Application (SPA) using Next.jsfor an artist, showcasing images of their dance performances and acts. The site provides a seamless user experience with responsive design and dynamic content, highlighting the artist&apos;s talent and work.",
    techStack: ["Next.js", "JavaScript", "CSS", "HTML"],
  },
];

const Experience = ({
  duration,
  designation,
  projectName,
  projectLink,
  summary,
  techStack,
}) => {
  return (
    <div className="experience-box">
      <div className="experience-duration-box"><img className="experience-duration-box__img" src={calendarLogo} alt="calendar"/><p className="experience-duration-box__para">{duration}</p></div>
      <div className="experience-info-box">
        <h3>
          {designation}
          <span>
            &nbsp; · &nbsp;<a className="experience-info-box__link" href={projectLink}>{projectName}</a>
          </span>
        </h3>
        <p>{summary}</p>
        <div className="experience-tech-list">
          {techStack.map((item) => (
            <span className="experience-tech-list__span" key={item}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experiences = () => {
  return (
    <section className="experiences-wrapper">
      {EXPERIENCES.map((item) => (
        <Experience key={item.id} {...item} />
      ))}
    </section>
  );
};

export default Experiences;
