import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="section" id="about">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>

        <p>
          I'm <strong>M Arpitha</strong>, a passionate B.Tech student pursuing
          Artificial Intelligence & Data Science at KLH Hyderabad (2024-2028) with a current cgpa of 9.48.
        </p>

        <p>
          I completed my schooling at St Joseph's School ICSE with 89% in 10th
          and 80% in ISC 12th.
        </p>

        <p>
          I enjoy building modern web applications and exploring Artificial
          Intelligence, Machine Learning, Full Stack Development and Data
          Science.
        </p>

        <p>
          Strong knowledge in DBMS, Operating Systems, Computer Networks, DSA,
          Frontend and Backend Development, Artificial Intelligence, Machine Learning,Deep Learning,Java, Python.
        </p>
      </motion.div>
    </section>
  );
}

export default About;