import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span>M Arpitha</span>
        </h1>

        <p>
          AI & Data Science Student | Full Stack Developer | ML Enthusiast
        </p>

        <div className="hero-buttons">
          <a
            href="https://github.com/Arpitha0309"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://linkedin.com/in/arpitha-choudhary"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://www.codechef.com/users/arp_2410080003"
            target="_blank"
            rel="noreferrer"
          >
            <FaCode /> CodeChef
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;