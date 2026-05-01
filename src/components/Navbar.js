import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Arpitha</h2>

      <div className="nav-links">
        <Link to="about" smooth duration={500}>About</Link>
        <Link to="skills" smooth duration={500}>Skills</Link>
        <Link to="projects" smooth duration={500}>Projects</Link>
        <Link to="contact" smooth duration={500}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;