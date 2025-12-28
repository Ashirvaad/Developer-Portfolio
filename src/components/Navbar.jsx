import React from "react";
import { motion } from "framer-motion";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="navbar"
    >
      <h1 className="logo glow">Ashirvaad Bhat</h1>
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        
      </div>
    </motion.nav>
  );
}
