import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "Python",
    "Java",
    "SQL",
    "React",
    "Node.js",
    "Machine Learning",
    "DBMS",
    "Operating Systems",
    "Computer Networks",
    "DSA",
    "MongoDB",
    "MySQL",
    "Frontend",
    "Backend",
    "AWS Cloud"
  ];

  return (
    <section className="section dark" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            whileHover={{ scale: 1.08 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;