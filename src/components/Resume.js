import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaFilePdf } from "react-icons/fa";

function Resume() {

  return (

    <section className="section dark" id="resume">

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Resume
      </motion.h2>

      <motion.div
        className="resume-card"

        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}

        transition={{ duration: 0.8 }}
      >

        <div className="resume-icon">
          <FaFilePdf />
        </div>

        <h3>M Arpitha Resume</h3>

        <p>
          AI & Data Science Student | Full Stack Developer |
          Machine Learning Enthusiast
        </p>

        <a
          href="/resume.pdf"
          download
          className="resume-btn"
        >
          <FaDownload />
          Download Resume
        </a>

      </motion.div>

    </section>
  );
}

export default Resume;