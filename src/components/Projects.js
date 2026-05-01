import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "Pest Control Management System",
      desc: "Hackathon winning Python Tkinter project for agriculture and pest monitoring.",
      link: "https://github.com/Arpitha0309",
      type: "github"
    },

    {
      title: "Canteen Management System",
      desc: "Modern full stack canteen management web application with responsive UI.",
      link: "https://student-canteen-system.vercel.app/",
      type: "live"
    },

    {
      title: "Car Rental System",
      desc: "Database driven car rental platform with booking and management features.",
      link: "https://github.com/Arpitha0309",
      type: "github"
    },

    {
      title: "LMS Platform",
      desc: "Learning management system with frontend and backend integration.",
      link: "https://github.com/Arpitha0309",
      type: "github"
    }
  ];

  return (

    <section className="section" id="projects">

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="project-grid">

        {projects.map((project, index) => (

          <motion.a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            key={index}
            className="project-card"
            whileHover={{
              y: -10,
              scale: 1.03
            }}
            transition={{ duration: 0.3 }}
          >

            <div className="project-top">

              <div className="project-icon">
                {project.type === "github"
                  ? <FaGithub />
                  : <FaExternalLinkAlt />
                }
              </div>

            </div>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <button className="repo-btn">

              {project.type === "github"
                ? "View Repository"
                : "Open Website"
              }

            </button>

          </motion.a>

        ))}

      </div>

    </section>
  );
}

export default Projects;
